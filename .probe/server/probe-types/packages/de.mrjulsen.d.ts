declare module "packages/de/mrjulsen/crn/block/$TrainStationClockBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$TrainStationClockBlockEntity, $TrainStationClockBlockEntity$Type} from "packages/de/mrjulsen/crn/block/be/$TrainStationClockBlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $TrainStationClockBlock extends $Block implements $IWrenchable, $IBE<($TrainStationClockBlockEntity)> {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getBlockEntityClass"(): $Class<($TrainStationClockBlockEntity)>
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "use"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "rotate"(pState: $BlockState$Type, pRotation: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "getRenderShape"(pState: $BlockState$Type): $RenderShape
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($TrainStationClockBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($TrainStationClockBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($TrainStationClockBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $TrainStationClockBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($TrainStationClockBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrainStationClockBlock$Type = ($TrainStationClockBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrainStationClockBlock_ = $TrainStationClockBlock$Type;
}}
declare module "packages/de/mrjulsen/mcdragonlib/internal/$DragonLibBlock$DragonLibItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DragonLibBlock$DragonLibItem extends $BlockItem {
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

constructor(pBlock: $Block$Type, pProperties: $Item$Properties$Type)

public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonLibBlock$DragonLibItem$Type = ($DragonLibBlock$DragonLibItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonLibBlock$DragonLibItem_ = $DragonLibBlock$DragonLibItem$Type;
}}
declare module "packages/de/mrjulsen/crn/item/$NavigatorItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NavigatorItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(props: $Item$Properties$Type)

public "use"(pLevel: $Level$Type, pPlayer: $Player$Type, pUsedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NavigatorItem$Type = ($NavigatorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NavigatorItem_ = $NavigatorItem$Type;
}}
declare module "packages/de/mrjulsen/mcdragonlib/client/ber/$IBlockEntityRendererInstance$EUpdateReason" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IBlockEntityRendererInstance$EUpdateReason extends $Enum<($IBlockEntityRendererInstance$EUpdateReason)> {
static readonly "INITIALIZED": $IBlockEntityRendererInstance$EUpdateReason
static readonly "DATA_CHANGED": $IBlockEntityRendererInstance$EUpdateReason
static readonly "BLOCK_CHANGED": $IBlockEntityRendererInstance$EUpdateReason


public static "values"(): ($IBlockEntityRendererInstance$EUpdateReason)[]
public static "valueOf"(name: string): $IBlockEntityRendererInstance$EUpdateReason
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockEntityRendererInstance$EUpdateReason$Type = (("data_changed") | ("initialized") | ("block_changed")) | ($IBlockEntityRendererInstance$EUpdateReason);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockEntityRendererInstance$EUpdateReason_ = $IBlockEntityRendererInstance$EUpdateReason$Type;
}}
declare module "packages/de/mrjulsen/crn/network/packets/cts/$TrainDataRequestPacket$TrainData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$DeparturePrediction$SimpleDeparturePrediction, $DeparturePrediction$SimpleDeparturePrediction$Type} from "packages/de/mrjulsen/crn/data/$DeparturePrediction$SimpleDeparturePrediction"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $TrainDataRequestPacket$TrainData {

constructor(trainId: $UUID$Type, trainName: string, predictions: $List$Type<($DeparturePrediction$SimpleDeparturePrediction$Type)>, speed: double, ticksWaitingForSignal: integer, oppositeDirection: boolean, onTrain: boolean)

public static "empty"(onTrain: boolean): $TrainDataRequestPacket$TrainData
public "trainName"(): string
public "predictions"(): $List<($DeparturePrediction$SimpleDeparturePrediction)>
public "stopovers"(): $List<($DeparturePrediction$SimpleDeparturePrediction)>
public "getLastStop"(): $Optional<($DeparturePrediction$SimpleDeparturePrediction)>
public "speed"(): double
public "ticksWaitingForSignal"(): integer
public "isOppositeDirection"(): boolean
public "toNbt"(): $CompoundTag
public "getNextStop"(): $Optional<($DeparturePrediction$SimpleDeparturePrediction)>
public static "fromNbt"(nbt: $CompoundTag$Type): $TrainDataRequestPacket$TrainData
public "trainId"(): $UUID
get "lastStop"(): $Optional<($DeparturePrediction$SimpleDeparturePrediction)>
get "oppositeDirection"(): boolean
get "nextStop"(): $Optional<($DeparturePrediction$SimpleDeparturePrediction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrainDataRequestPacket$TrainData$Type = ($TrainDataRequestPacket$TrainData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrainDataRequestPacket$TrainData_ = $TrainDataRequestPacket$TrainData$Type;
}}
declare module "packages/de/mrjulsen/mcdragonlib/mixin/$BakedGlyphAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BakedGlyphAccessor {

 "setU0"(arg0: float): void
 "getU0"(): float
 "getU1"(): float
 "setV0"(arg0: float): void
 "getV0"(): float
 "setV1"(arg0: float): void
 "setU1"(arg0: float): void
 "getV1"(): float
}

export namespace $BakedGlyphAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedGlyphAccessor$Type = ($BakedGlyphAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedGlyphAccessor_ = $BakedGlyphAccessor$Type;
}}
declare module "packages/de/mrjulsen/mcdragonlib/internal/$DragonLibBlock" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $DragonLibBlock extends $Block {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "use"(blockState: $BlockState$Type, level: $Level$Type, blockPos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonLibBlock$Type = ($DragonLibBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonLibBlock_ = $DragonLibBlock$Type;
}}
declare module "packages/de/mrjulsen/crn/block/be/$TrainStationClockBlockEntity" {
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$IBERInstance, $IBERInstance$Type} from "packages/de/mrjulsen/mcdragonlib/block/$IBERInstance"
import {$IColorableBlockEntity, $IColorableBlockEntity$Type} from "packages/de/mrjulsen/crn/block/be/$IColorableBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IBlockEntityRendererInstance, $IBlockEntityRendererInstance$Type} from "packages/de/mrjulsen/mcdragonlib/client/ber/$IBlockEntityRendererInstance"

export class $TrainStationClockBlockEntity extends $SmartBlockEntity implements $IBERInstance<($TrainStationClockBlockEntity)>, $IColorableBlockEntity {

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "setColor"(color: integer): void
public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "getColor"(): integer
public "getRenderer"(): $IBlockEntityRendererInstance<($TrainStationClockBlockEntity)>
public "isGlowing"(): boolean
public "setGlowing"(glowing: boolean): void
set "color"(value: integer)
get "color"(): integer
get "renderer"(): $IBlockEntityRendererInstance<($TrainStationClockBlockEntity)>
get "glowing"(): boolean
set "glowing"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrainStationClockBlockEntity$Type = ($TrainStationClockBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrainStationClockBlockEntity_ = $TrainStationClockBlockEntity$Type;
}}
declare module "packages/de/mrjulsen/crn/data/$ESide" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ITranslatableEnum, $ITranslatableEnum$Type} from "packages/de/mrjulsen/mcdragonlib/core/$ITranslatableEnum"

export class $ESide extends $Enum<($ESide)> implements $StringRepresentable, $ITranslatableEnum {
static readonly "FRONT": $ESide
static readonly "BOTH": $ESide


public "getName"(): string
public static "values"(): ($ESide)[]
public static "valueOf"(name: string): $ESide
public "getId"(): integer
public "getSerializedName"(): string
public static "getSideById"(index: integer): $ESide
public "getEnumName"(): string
public "getEnumValueName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public "getEnumTranslationKey"(modid: string): string
public "getEnumDescriptionTranslationKey"(modid: string): string
public "getValueTranslationKey"(modid: string): string
public "getValueInfoTranslationKey"(modid: string): string
get "name"(): string
get "id"(): integer
get "serializedName"(): string
get "enumName"(): string
get "enumValueName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ESide$Type = (("front") | ("both")) | ($ESide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ESide_ = $ESide$Type;
}}
declare module "packages/de/mrjulsen/mcdragonlib/mixin/$FontAccessor" {
import {$StringSplitter, $StringSplitter$Type} from "packages/net/minecraft/client/$StringSplitter"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FontSet, $FontSet$Type} from "packages/net/minecraft/client/gui/font/$FontSet"

export interface $FontAccessor {

 "getSplitter"(): $StringSplitter
 "invokeGetFontSet"(arg0: $ResourceLocation$Type): $FontSet
}

export namespace $FontAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontAccessor$Type = ($FontAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FontAccessor_ = $FontAccessor$Type;
}}
declare module "packages/de/mrjulsen/crn/block/be/$IColorableBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IColorableBlockEntity {

 "getColor"(): integer
 "isGlowing"(): boolean
}

export namespace $IColorableBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColorableBlockEntity$Type = ($IColorableBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColorableBlockEntity_ = $IColorableBlockEntity$Type;
}}
declare module "packages/de/mrjulsen/crn/block/$AdvancedDisplaySlopedBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Tripple, $Tripple$Type} from "packages/de/mrjulsen/mcdragonlib/data/$Tripple"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$AbstractAdvancedDisplayBlock, $AbstractAdvancedDisplayBlock$Type} from "packages/de/mrjulsen/crn/block/$AbstractAdvancedDisplayBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Pair, $Pair$Type} from "packages/de/mrjulsen/mcdragonlib/data/$Pair"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AdvancedDisplaySlopedBlock extends $AbstractAdvancedDisplayBlock {
static readonly "FACING": $DirectionProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "isSingleLined"(): boolean
public "getRenderRotation"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Tripple<(float), (float), (float)>
public "getRenderZOffset"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Pair<(float), (float)>
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getRenderOffset"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Pair<(float), (float)>
public "getRenderAspectRatio"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Pair<(float), (float)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "singleLined"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedDisplaySlopedBlock$Type = ($AdvancedDisplaySlopedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedDisplaySlopedBlock_ = $AdvancedDisplaySlopedBlock$Type;
}}
declare module "packages/de/mrjulsen/crn/data/$DeparturePrediction$TrainExitSide" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DeparturePrediction$TrainExitSide extends $Enum<($DeparturePrediction$TrainExitSide)> {
static readonly "UNKNOWN": $DeparturePrediction$TrainExitSide
static readonly "RIGHT": $DeparturePrediction$TrainExitSide
static readonly "LEFT": $DeparturePrediction$TrainExitSide


public static "values"(): ($DeparturePrediction$TrainExitSide)[]
public static "valueOf"(name: string): $DeparturePrediction$TrainExitSide
public "getAsByte"(): byte
public "getOpposite"(): $DeparturePrediction$TrainExitSide
public static "getFromByte"(side: byte): $DeparturePrediction$TrainExitSide
get "asByte"(): byte
get "opposite"(): $DeparturePrediction$TrainExitSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeparturePrediction$TrainExitSide$Type = (("left") | ("right") | ("unknown")) | ($DeparturePrediction$TrainExitSide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeparturePrediction$TrainExitSide_ = $DeparturePrediction$TrainExitSide$Type;
}}
declare module "packages/de/mrjulsen/crn/data/$DeparturePrediction$SimpleDeparturePrediction" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TrainStationAlias$StationInfo, $TrainStationAlias$StationInfo$Type} from "packages/de/mrjulsen/crn/data/$TrainStationAlias$StationInfo"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DeparturePrediction$TrainExitSide, $DeparturePrediction$TrainExitSide$Type} from "packages/de/mrjulsen/crn/data/$DeparturePrediction$TrainExitSide"

export class $DeparturePrediction$SimpleDeparturePrediction extends $Record {

constructor(stationTagName: string, stationName: string, departureTicks: integer, scheduleTitle: string, trainName: string, trainId: $UUID$Type, stationInfo: $TrainStationAlias$StationInfo$Type, exitSide: $DeparturePrediction$TrainExitSide$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "scheduleTitle"(): string
public "trainName"(): string
public "departureTicks"(): integer
public "stationInfo"(): $TrainStationAlias$StationInfo
public "toNbt"(): $CompoundTag
public "stationTagName"(): string
public "exitSide"(): $DeparturePrediction$TrainExitSide
public static "fromNbt"(nbt: $CompoundTag$Type): $DeparturePrediction$SimpleDeparturePrediction
public "trainId"(): $UUID
public "stationName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeparturePrediction$SimpleDeparturePrediction$Type = ($DeparturePrediction$SimpleDeparturePrediction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeparturePrediction$SimpleDeparturePrediction_ = $DeparturePrediction$SimpleDeparturePrediction$Type;
}}
declare module "packages/de/mrjulsen/mcdragonlib/data/$Pair" {
import {$Single, $Single$Type} from "packages/de/mrjulsen/mcdragonlib/data/$Single"

export class $Pair<A, B> extends $Single<(A)> {

constructor(value1: A, value2: B)

public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"<A, B>(first: A, second: B): $Pair<(A), (B)>
public "swap"(pair: $Pair$Type<(A), (B)>): $Pair<(A), (B)>
public "getSecond"(): B
get "second"(): B
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Type<A, B> = ($Pair<(A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<A, B> = $Pair$Type<(A), (B)>;
}}
declare module "packages/de/mrjulsen/crn/block/$AdvancedDisplayBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Tripple, $Tripple$Type} from "packages/de/mrjulsen/mcdragonlib/data/$Tripple"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Pair, $Pair$Type} from "packages/de/mrjulsen/mcdragonlib/data/$Pair"
import {$AbstractAdvancedSidedDisplayBlock, $AbstractAdvancedSidedDisplayBlock$Type} from "packages/de/mrjulsen/crn/block/$AbstractAdvancedSidedDisplayBlock"
import {$ESide, $ESide$Type} from "packages/de/mrjulsen/crn/data/$ESide"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AdvancedDisplayBlock extends $AbstractAdvancedSidedDisplayBlock {
static readonly "SIDE": $EnumProperty<($ESide)>
static readonly "FACING": $DirectionProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "isSingleLined"(): boolean
public "getRenderRotation"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Tripple<(float), (float), (float)>
public "getRenderZOffset"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Pair<(float), (float)>
public "getRenderOffset"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Pair<(float), (float)>
public "getRenderAspectRatio"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Pair<(float), (float)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "singleLined"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedDisplayBlock$Type = ($AdvancedDisplayBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedDisplayBlock_ = $AdvancedDisplayBlock$Type;
}}
declare module "packages/de/mrjulsen/crn/block/$AdvancedDisplayPanelBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$EBlockAlignment, $EBlockAlignment$Type} from "packages/de/mrjulsen/crn/data/$EBlockAlignment"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Tripple, $Tripple$Type} from "packages/de/mrjulsen/mcdragonlib/data/$Tripple"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Pair, $Pair$Type} from "packages/de/mrjulsen/mcdragonlib/data/$Pair"
import {$AbstractAdvancedSidedDisplayBlock, $AbstractAdvancedSidedDisplayBlock$Type} from "packages/de/mrjulsen/crn/block/$AbstractAdvancedSidedDisplayBlock"
import {$ESide, $ESide$Type} from "packages/de/mrjulsen/crn/data/$ESide"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AdvancedDisplayPanelBlock extends $AbstractAdvancedSidedDisplayBlock {
static readonly "Z_ALIGN": $EnumProperty<($EBlockAlignment)>
static readonly "SIDE": $EnumProperty<($ESide)>
static readonly "FACING": $DirectionProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "isSingleLined"(): boolean
public "getRenderRotation"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Tripple<(float), (float), (float)>
public "getRenderZOffset"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Pair<(float), (float)>
public "appendOnPlace"(context: $BlockPlaceContext$Type, state: $BlockState$Type, other: $BlockState$Type): $BlockState
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getRenderOffset"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Pair<(float), (float)>
public "getRenderAspectRatio"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Pair<(float), (float)>
public "getExcludedProperties"(): $Collection<($Property<(any)>)>
public "canConnectWithBlock"(level: $BlockGetter$Type, selfState: $BlockState$Type, otherState: $BlockState$Type): boolean
public "getDefaultPlacementState"(context: $BlockPlaceContext$Type, state: $BlockState$Type, other: $BlockState$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "singleLined"(): boolean
get "excludedProperties"(): $Collection<($Property<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedDisplayPanelBlock$Type = ($AdvancedDisplayPanelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedDisplayPanelBlock_ = $AdvancedDisplayPanelBlock$Type;
}}
declare module "packages/de/mrjulsen/crn/data/$EBlockAlignment" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ITranslatableEnum, $ITranslatableEnum$Type} from "packages/de/mrjulsen/mcdragonlib/core/$ITranslatableEnum"

export class $EBlockAlignment extends $Enum<($EBlockAlignment)> implements $StringRepresentable, $ITranslatableEnum {
static readonly "NEGATIVE": $EBlockAlignment
static readonly "CENTER": $EBlockAlignment
static readonly "POSITIVE": $EBlockAlignment


public "getName"(): string
public static "values"(): ($EBlockAlignment)[]
public static "valueOf"(name: string): $EBlockAlignment
public "getId"(): integer
public "getSerializedName"(): string
public static "getSideById"(index: integer): $EBlockAlignment
public "getEnumName"(): string
public "getEnumValueName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public "getEnumTranslationKey"(modid: string): string
public "getEnumDescriptionTranslationKey"(modid: string): string
public "getValueTranslationKey"(modid: string): string
public "getValueInfoTranslationKey"(modid: string): string
get "name"(): string
get "id"(): integer
get "serializedName"(): string
get "enumName"(): string
get "enumValueName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EBlockAlignment$Type = (("negative") | ("center") | ("positive")) | ($EBlockAlignment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EBlockAlignment_ = $EBlockAlignment$Type;
}}
declare module "packages/de/mrjulsen/crn/mixin/$ScheduleDataAccessor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $ScheduleDataAccessor {

 "crn$conditionProgress"(): $List<(integer)>
 "crn$conditionContext"(): $List<($CompoundTag)>
}

export namespace $ScheduleDataAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScheduleDataAccessor$Type = ($ScheduleDataAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScheduleDataAccessor_ = $ScheduleDataAccessor$Type;
}}
declare module "packages/de/mrjulsen/crn/block/be/$IContraptionBlockEntity" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$CarriageContraption, $CarriageContraption$Type} from "packages/com/simibubi/create/content/trains/entity/$CarriageContraption"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IContraptionBlockEntity<T extends $BlockEntity> {

 "contraptionTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $CarriageContraption$Type): void

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $CarriageContraption$Type): void
}

export namespace $IContraptionBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContraptionBlockEntity$Type<T> = ($IContraptionBlockEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContraptionBlockEntity_<T> = $IContraptionBlockEntity$Type<(T)>;
}}
declare module "packages/de/mrjulsen/mcdragonlib/client/ber/$IBlockEntityRendererInstance$BlockEntityRendererContext" {
import {$BlockEntityRendererProvider$Context, $BlockEntityRendererProvider$Context$Type} from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRendererProvider$Context"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BERUtils, $BERUtils$Type} from "packages/de/mrjulsen/mcdragonlib/client/util/$BERUtils"

export class $IBlockEntityRendererInstance$BlockEntityRendererContext extends $Record {

constructor(context: $BlockEntityRendererProvider$Context$Type, renderUtils: $BERUtils$Type)

public "context"(): $BlockEntityRendererProvider$Context
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "renderUtils"(): $BERUtils
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockEntityRendererInstance$BlockEntityRendererContext$Type = ($IBlockEntityRendererInstance$BlockEntityRendererContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockEntityRendererInstance$BlockEntityRendererContext_ = $IBlockEntityRendererInstance$BlockEntityRendererContext$Type;
}}
declare module "packages/de/mrjulsen/crn/block/be/$AdvancedDisplayBlockEntity" {
import {$Cache, $Cache$Type} from "packages/de/mrjulsen/mcdragonlib/data/$Cache"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$DeparturePrediction$SimpleDeparturePrediction, $DeparturePrediction$SimpleDeparturePrediction$Type} from "packages/de/mrjulsen/crn/data/$DeparturePrediction$SimpleDeparturePrediction"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$IBERInstance, $IBERInstance$Type} from "packages/de/mrjulsen/mcdragonlib/block/$IBERInstance"
import {$CarriageContraption, $CarriageContraption$Type} from "packages/com/simibubi/create/content/trains/entity/$CarriageContraption"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$IBlockEntitySerializable, $IBlockEntitySerializable$Type} from "packages/de/mrjulsen/crn/data/$IBlockEntitySerializable"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$Tripple, $Tripple$Type} from "packages/de/mrjulsen/mcdragonlib/data/$Tripple"
import {$IBlockEntityRendererInstance, $IBlockEntityRendererInstance$Type} from "packages/de/mrjulsen/mcdragonlib/client/ber/$IBlockEntityRendererInstance"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TrainDataRequestPacket$TrainData, $TrainDataRequestPacket$TrainData$Type} from "packages/de/mrjulsen/crn/network/packets/cts/$TrainDataRequestPacket$TrainData"
import {$TrainStationAlias$StationInfo, $TrainStationAlias$StationInfo$Type} from "packages/de/mrjulsen/crn/data/$TrainStationAlias$StationInfo"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$AbstractAdvancedDisplayBlock, $AbstractAdvancedDisplayBlock$Type} from "packages/de/mrjulsen/crn/block/$AbstractAdvancedDisplayBlock"
import {$Pair, $Pair$Type} from "packages/de/mrjulsen/mcdragonlib/data/$Pair"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$AdvancedDisplaySource$ETimeDisplay, $AdvancedDisplaySource$ETimeDisplay$Type} from "packages/de/mrjulsen/crn/block/display/$AdvancedDisplaySource$ETimeDisplay"
import {$DeparturePrediction$TrainExitSide, $DeparturePrediction$TrainExitSide$Type} from "packages/de/mrjulsen/crn/data/$DeparturePrediction$TrainExitSide"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IContraptionBlockEntity, $IContraptionBlockEntity$Type} from "packages/de/mrjulsen/crn/block/be/$IContraptionBlockEntity"
import {$CarriageData, $CarriageData$Type} from "packages/de/mrjulsen/crn/data/$CarriageData"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EDisplayType, $EDisplayType$Type} from "packages/de/mrjulsen/crn/data/$EDisplayType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EDisplayInfo, $EDisplayInfo$Type} from "packages/de/mrjulsen/crn/data/$EDisplayInfo"
import {$IColorableBlockEntity, $IColorableBlockEntity$Type} from "packages/de/mrjulsen/crn/block/be/$IColorableBlockEntity"
import {$IMultiblockBlockEntity, $IMultiblockBlockEntity$Type} from "packages/de/mrjulsen/crn/block/be/$IMultiblockBlockEntity"

export class $AdvancedDisplayBlockEntity extends $SmartBlockEntity implements $IMultiblockBlockEntity<($AdvancedDisplayBlockEntity), ($AbstractAdvancedDisplayBlock)>, $IContraptionBlockEntity<($AdvancedDisplayBlockEntity)>, $IBERInstance<($AdvancedDisplayBlockEntity)>, $IBlockEntitySerializable, $IColorableBlockEntity {
static readonly "MAX_XSIZE": byte
static readonly "MAX_YSIZE": byte
readonly "relativeExitDirection": $Cache<($DeparturePrediction$TrainExitSide)>
readonly "renderRotation": $Cache<($Tripple<(float), (float), (float)>)>
readonly "renderOffset": $Cache<($Pair<(float), (float)>)>
readonly "renderZOffset": $Cache<($Pair<(float), (float)>)>
readonly "renderAspectRatio": $Cache<($Pair<(float), (float)>)>
readonly "renderScale": $Cache<(float)>

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "read"(pTag: $CompoundTag$Type, clientPacket: boolean): void
public "reset"(): void
public "tick"(): void
public "setColor"(color: integer): void
public "copyFrom"(other: $AdvancedDisplayBlockEntity$Type): void
public "getDirection"(): $Direction
public "getMaxHeight"(): byte
public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "lazyTick"(): void
public "getHeight"(): byte
public "getWidth"(): byte
public "serialize"(): $CompoundTag
public "deserialize"(nbt: $CompoundTag$Type): void
public "getMaxWidth"(): byte
public "connectable"(getter: $BlockGetter$Type, a: $BlockPos$Type, b: $BlockPos$Type): boolean
public "setDepartureData"(predictions: $List$Type<($DeparturePrediction$SimpleDeparturePrediction$Type)>, nextDepartureStopovers: $List$Type<(string)>, stationNameFilter: string, staionInfo: $TrainStationAlias$StationInfo$Type, lastRefreshedTime: long, platformWidth: byte, trainNameWidth: byte, timeDisplayId: byte): void
public "getColor"(): integer
public "getRenderBoundingBox"(): $AABB
public "getRenderer"(): $IBlockEntityRendererInstance<($AdvancedDisplayBlockEntity)>
public "getBlockType"(): $Class<($AbstractAdvancedDisplayBlock)>
public "getBlockEntityType"(): $Class<($AdvancedDisplayBlockEntity)>
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "isGlowing"(): boolean
public "setGlowing"(glowing: boolean): void
public "getNextDepartureStopovers"(): $List<(string)>
public "getStationNameFilter"(): string
public "getLastRefreshedTime"(): long
public "isController"(): boolean
public "getController"(): $AdvancedDisplayBlockEntity
public "getTrainNameWidth"(): byte
public "getXSizeScaled"(): byte
public "getStationInfo"(): $TrainStationAlias$StationInfo
public "getTrainData"(): $TrainDataRequestPacket$TrainData
public "getYSizeScaled"(): byte
public "getCarriageData"(): $CarriageData
public "isPlatformFixed"(): boolean
public "isSingleLine"(): boolean
public "getPredictions"(): $List<($DeparturePrediction$SimpleDeparturePrediction)>
public "getInfoType"(): $EDisplayInfo
public "getPlatformWidth"(): byte
public "getDisplayType"(): $EDisplayType
public "getTimeDisplay"(): $AdvancedDisplaySource$ETimeDisplay
public "contraptionTick"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, carriage: $CarriageContraption$Type): void
public "setInfoType"(type: $EDisplayInfo$Type): void
public "setDisplayType"(type: $EDisplayType$Type): void
public "getUpdateTag"(): $CompoundTag
public "onDataPacket"(net: $Connection$Type, pkt: $ClientboundBlockEntityDataPacket$Type): void
public "getXSize"(): byte
public "getYSize"(): byte
public "updateControllerStatus"(): void
public "getPlatformInfoLinesCount"(): integer
public "applyToAll"(apply: $Consumer$Type<($AdvancedDisplayBlockEntity$Type)>): void
public "getBlockEntityCasted"(level: $Level$Type, otherpos: $BlockPos$Type): $AdvancedDisplayBlockEntity
set "color"(value: integer)
get "direction"(): $Direction
get "maxHeight"(): byte
get "height"(): byte
get "width"(): byte
get "maxWidth"(): byte
get "color"(): integer
get "renderBoundingBox"(): $AABB
get "renderer"(): $IBlockEntityRendererInstance<($AdvancedDisplayBlockEntity)>
get "blockType"(): $Class<($AbstractAdvancedDisplayBlock)>
get "blockEntityType"(): $Class<($AdvancedDisplayBlockEntity)>
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "glowing"(): boolean
set "glowing"(value: boolean)
get "nextDepartureStopovers"(): $List<(string)>
get "stationNameFilter"(): string
get "lastRefreshedTime"(): long
get "controller"(): boolean
get "controller"(): $AdvancedDisplayBlockEntity
get "trainNameWidth"(): byte
get "xSizeScaled"(): byte
get "stationInfo"(): $TrainStationAlias$StationInfo
get "trainData"(): $TrainDataRequestPacket$TrainData
get "ySizeScaled"(): byte
get "carriageData"(): $CarriageData
get "platformFixed"(): boolean
get "singleLine"(): boolean
get "predictions"(): $List<($DeparturePrediction$SimpleDeparturePrediction)>
get "infoType"(): $EDisplayInfo
get "platformWidth"(): byte
get "displayType"(): $EDisplayType
get "timeDisplay"(): $AdvancedDisplaySource$ETimeDisplay
set "infoType"(value: $EDisplayInfo$Type)
set "displayType"(value: $EDisplayType$Type)
get "updateTag"(): $CompoundTag
get "xSize"(): byte
get "ySize"(): byte
get "platformInfoLinesCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedDisplayBlockEntity$Type = ($AdvancedDisplayBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedDisplayBlockEntity_ = $AdvancedDisplayBlockEntity$Type;
}}
declare module "packages/de/mrjulsen/crn/client/gui/$ModGuiIcons" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$AllIcons, $AllIcons$Type} from "packages/com/simibubi/create/foundation/gui/$AllIcons"
import {$Graphics, $Graphics$Type} from "packages/de/mrjulsen/mcdragonlib/client/util/$Graphics"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ModGuiIcons extends $Enum<($ModGuiIcons)> {
static readonly "EMPTY": $ModGuiIcons
static readonly "CHECK": $ModGuiIcons
static readonly "CROSS": $ModGuiIcons
static readonly "WARN": $ModGuiIcons
static readonly "SETTINGS": $ModGuiIcons
static readonly "FILTER": $ModGuiIcons
static readonly "BOOKMARK": $ModGuiIcons
static readonly "PIN": $ModGuiIcons
static readonly "UNPIN": $ModGuiIcons
static readonly "SOUND_ON": $ModGuiIcons
static readonly "SOUND_OFF": $ModGuiIcons
static readonly "SCALE": $ModGuiIcons
static readonly "TOP_LEFT": $ModGuiIcons
static readonly "TOP_RIGHT": $ModGuiIcons
static readonly "BOTTOM_LEFT": $ModGuiIcons
static readonly "BOTTOM_RIGHT": $ModGuiIcons
static readonly "POSITION": $ModGuiIcons
static readonly "TARGET": $ModGuiIcons
static readonly "TIME": $ModGuiIcons
static readonly "WALK": $ModGuiIcons
static readonly "INFO": $ModGuiIcons
static readonly "EXPAND": $ModGuiIcons
static readonly "COLLAPSE": $ModGuiIcons
static readonly "DELETE": $ModGuiIcons
static readonly "ADD": $ModGuiIcons
static readonly "DOUBLE_SIDED": $ModGuiIcons
static readonly "TRAIN_DESTINATION": $ModGuiIcons
static readonly "PASSENGER_INFORMATION": $ModGuiIcons
static readonly "PLATFORM_INFORMATION": $ModGuiIcons
static readonly "LESS_DETAILS": $ModGuiIcons
static readonly "DETAILED": $ModGuiIcons
static readonly "VERY_DETAILED": $ModGuiIcons
static readonly "ARROW_RIGHT": $ModGuiIcons
static readonly "ARROW_LEFT": $ModGuiIcons
static readonly "ICON_SIZE": integer
static readonly "ICON_LOCATION": $ResourceLocation


public static "values"(): ($ModGuiIcons)[]
public static "valueOf"(name: string): $ModGuiIcons
public "getId"(): string
public "render"(graphics: $Graphics$Type, x: integer, y: integer): void
public "getU"(): integer
public "getUMultiplier"(): integer
public "getVMultiplier"(): integer
public static "getByStringId"(id: string): $ModGuiIcons
public "getAsCreateIcon"(): $AllIcons
public "getV"(): integer
get "id"(): string
get "u"(): integer
get "uMultiplier"(): integer
get "vMultiplier"(): integer
get "asCreateIcon"(): $AllIcons
get "v"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModGuiIcons$Type = (("top_right") | ("sound_off") | ("scale") | ("less_details") | ("delete") | ("empty") | ("train_destination") | ("sound_on") | ("pin") | ("arrow_left") | ("top_left") | ("info") | ("add") | ("platform_information") | ("settings") | ("passenger_information") | ("cross") | ("very_detailed") | ("check") | ("bottom_left") | ("target") | ("filter") | ("warn") | ("bookmark") | ("expand") | ("detailed") | ("arrow_right") | ("unpin") | ("double_sided") | ("bottom_right") | ("position") | ("time") | ("walk") | ("collapse")) | ($ModGuiIcons);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModGuiIcons_ = $ModGuiIcons$Type;
}}
declare module "packages/de/mrjulsen/mcdragonlib/data/$Cache" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Cache<T> {

constructor(provider: $Supplier$Type<(T)>)

public "get"(): T
public "clear"(): void
public "isCached"(): boolean
public "getIfAvailable"(): $Optional<(T)>
get "cached"(): boolean
get "ifAvailable"(): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cache$Type<T> = ($Cache<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cache_<T> = $Cache$Type<(T)>;
}}
declare module "packages/de/mrjulsen/mcdragonlib/client/util/$Graphics" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $Graphics extends $Record {

constructor(graphics: $GuiGraphics$Type, poseStack: $PoseStack$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "graphics"(): $GuiGraphics
public "poseStack"(): $PoseStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Graphics$Type = ($Graphics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Graphics_ = $Graphics$Type;
}}
declare module "packages/de/mrjulsen/crn/block/be/$IMultiblockBlockEntity" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IMultiblockBlockEntity<T extends ($BlockEntity) & ($IMultiblockBlockEntity<(T), (B)>), B extends $Block> {

 "getMaxHeight"(): byte
 "getHeight"(): byte
 "getWidth"(): byte
 "getMaxWidth"(): byte
 "connectable"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): boolean
 "applyToAll"(apply: $Consumer$Type<(T)>): void
 "getBlockType"(): $Class<(B)>
 "getBlockEntityType"(): $Class<(T)>
 "getBlockEntityCasted"(level: $Level$Type, otherpos: $BlockPos$Type): T
 "isController"(): boolean
}

export namespace $IMultiblockBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockBlockEntity$Type<T, B> = ($IMultiblockBlockEntity<(T), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockBlockEntity_<T, B> = $IMultiblockBlockEntity$Type<(T), (B)>;
}}
declare module "packages/de/mrjulsen/mcdragonlib/data/$Tripple" {
import {$Pair, $Pair$Type} from "packages/de/mrjulsen/mcdragonlib/data/$Pair"

export class $Tripple<A, B, C> extends $Pair<(A), (B)> {


public "getThird"(): C
public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"<A, B, C>(first: A, second: B, third: C): $Tripple<(A), (B), (C)>
get "third"(): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tripple$Type<A, B, C> = ($Tripple<(A), (B), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tripple_<A, B, C> = $Tripple$Type<(A), (B), (C)>;
}}
declare module "packages/de/mrjulsen/mcdragonlib/client/util/$FontUtils" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BakedGlyphAccessor, $BakedGlyphAccessor$Type} from "packages/de/mrjulsen/mcdragonlib/mixin/$BakedGlyphAccessor"
import {$FontSet, $FontSet$Type} from "packages/net/minecraft/client/gui/font/$FontSet"
import {$BakedGlyph, $BakedGlyph$Type} from "packages/net/minecraft/client/gui/font/glyphs/$BakedGlyph"
import {$GlyphInfo, $GlyphInfo$Type} from "packages/com/mojang/blaze3d/font/$GlyphInfo"

export class $FontUtils {
readonly "font": $Font
readonly "fontSet": $FontSet

constructor(fontStyle: $ResourceLocation$Type)

public "reset"(): void
public "getGlyph"(charCode: integer): $BakedGlyph
public "getGlyphInfo"(charCode: integer): $GlyphInfo
public "getGlyphAccessor"(charCode: integer): $BakedGlyphAccessor
public "popUV"(charCode: integer): boolean
public "pushUV"(charCode: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontUtils$Type = ($FontUtils);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FontUtils_ = $FontUtils$Type;
}}
declare module "packages/de/mrjulsen/mcdragonlib/block/$IBERInstance" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IBlockEntityRendererInstance, $IBlockEntityRendererInstance$Type} from "packages/de/mrjulsen/mcdragonlib/client/ber/$IBlockEntityRendererInstance"

export interface $IBERInstance<T extends $BlockEntity> {

 "getRenderer"(): $IBlockEntityRendererInstance<(T)>

(): $IBlockEntityRendererInstance<(T)>
}

export namespace $IBERInstance {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBERInstance$Type<T> = ($IBERInstance<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBERInstance_<T> = $IBERInstance$Type<(T)>;
}}
declare module "packages/de/mrjulsen/crn/block/$AbstractAdvancedDisplayBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AdvancedDisplayBlockEntity, $AdvancedDisplayBlockEntity$Type} from "packages/de/mrjulsen/crn/block/be/$AdvancedDisplayBlockEntity"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Tripple, $Tripple$Type} from "packages/de/mrjulsen/mcdragonlib/data/$Tripple"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Pair, $Pair$Type} from "packages/de/mrjulsen/mcdragonlib/data/$Pair"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $AbstractAdvancedDisplayBlock extends $Block implements $IWrenchable, $IBE<($AdvancedDisplayBlockEntity)> {
static readonly "FACING": $DirectionProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public static "getConnection"(state: $BlockState$Type, side: $Direction$Type): boolean
public "getBlockEntityClass"(): $Class<($AdvancedDisplayBlockEntity)>
public "isSingleLined"(): boolean
public "applyPropertiesOf"(current: $BlockState$Type, state: $BlockState$Type): $BlockState
public "getRenderRotation"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $Tripple<(float), (float), (float)>
public "getRenderZOffset"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $Pair<(float), (float)>
public "appendOnPlace"(context: $BlockPlaceContext$Type, state: $BlockState$Type, other: $BlockState$Type): $BlockState
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "updateShape"(state: $BlockState$Type, pDirection: $Direction$Type, pNeighborState: $BlockState$Type, pLevel: $LevelAccessor$Type, pCurrentPos: $BlockPos$Type, pNeighborPos: $BlockPos$Type): $BlockState
public "use"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "onPlace"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pOldState: $BlockState$Type, pIsMoving: boolean): void
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "rotate"(pState: $BlockState$Type, pRotation: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "getRenderShape"(pState: $BlockState$Type): $RenderShape
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getRenderOffset"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $Pair<(float), (float)>
public "tick"(pState: $BlockState$Type, pLevel: $ServerLevel$Type, pPos: $BlockPos$Type, pRandom: $RandomSource$Type): void
public static "setConnection"(state: $BlockState$Type, side: $Direction$Type, connect: boolean): $BlockState
public "updateNeighbours"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type): void
public "getPropertyFromNeighbours"<T extends $Comparable<(T)>>(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, property: $Property$Type<(T)>): $BlockState
public "getRenderAspectRatio"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $Pair<(float), (float)>
public "getPropertyFromNeighbour"<T extends $Comparable<(T)>>(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, relPos: $BlockPos$Type, property: $Property$Type<(T)>): $BlockState
public "getExcludedProperties"(): $Collection<($Property<(any)>)>
public "canConnectWithBlock"(level: $BlockGetter$Type, selfState: $BlockState$Type, otherState: $BlockState$Type): boolean
public "getDefaultPlacementState"(context: $BlockPlaceContext$Type, state: $BlockState$Type, other: $BlockState$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($AdvancedDisplayBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($AdvancedDisplayBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($AdvancedDisplayBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $AdvancedDisplayBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($AdvancedDisplayBlockEntity)>
get "singleLined"(): boolean
get "blockEntityType"(): $BlockEntityType<(any)>
get "excludedProperties"(): $Collection<($Property<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAdvancedDisplayBlock$Type = ($AbstractAdvancedDisplayBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAdvancedDisplayBlock_ = $AbstractAdvancedDisplayBlock$Type;
}}
declare module "packages/de/mrjulsen/crn/block/display/$AdvancedDisplaySource$ETimeDisplay" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ITranslatableEnum, $ITranslatableEnum$Type} from "packages/de/mrjulsen/mcdragonlib/core/$ITranslatableEnum"

export class $AdvancedDisplaySource$ETimeDisplay extends $Enum<($AdvancedDisplaySource$ETimeDisplay)> implements $StringRepresentable, $ITranslatableEnum {
static readonly "ABS": $AdvancedDisplaySource$ETimeDisplay
static readonly "ETA": $AdvancedDisplaySource$ETimeDisplay


public "getName"(): string
public static "values"(): ($AdvancedDisplaySource$ETimeDisplay)[]
public static "valueOf"(name: string): $AdvancedDisplaySource$ETimeDisplay
public "getId"(): byte
public "getSerializedName"(): string
public static "getById"(id: integer): $AdvancedDisplaySource$ETimeDisplay
public "getEnumName"(): string
public "getEnumValueName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public "getEnumTranslationKey"(modid: string): string
public "getEnumDescriptionTranslationKey"(modid: string): string
public "getValueTranslationKey"(modid: string): string
public "getValueInfoTranslationKey"(modid: string): string
get "name"(): string
get "id"(): byte
get "serializedName"(): string
get "enumName"(): string
get "enumValueName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedDisplaySource$ETimeDisplay$Type = (("abs") | ("eta")) | ($AdvancedDisplaySource$ETimeDisplay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedDisplaySource$ETimeDisplay_ = $AdvancedDisplaySource$ETimeDisplay$Type;
}}
declare module "packages/de/mrjulsen/crn/data/$IBlockEntitySerializable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $IBlockEntitySerializable {

 "serialize"(): $CompoundTag
 "deserialize"(arg0: $CompoundTag$Type): void
}

export namespace $IBlockEntitySerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockEntitySerializable$Type = ($IBlockEntitySerializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockEntitySerializable_ = $IBlockEntitySerializable$Type;
}}
declare module "packages/de/mrjulsen/crn/data/$TrainStationAlias$StationInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $TrainStationAlias$StationInfo extends $Record {

constructor(platform: string)

public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "empty"(): $TrainStationAlias$StationInfo
public "platform"(): string
public "writeNbt"(nbt: $CompoundTag$Type): void
public static "fromNbt"(nbt: $CompoundTag$Type): $TrainStationAlias$StationInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrainStationAlias$StationInfo$Type = ($TrainStationAlias$StationInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrainStationAlias$StationInfo_ = $TrainStationAlias$StationInfo$Type;
}}
declare module "packages/de/mrjulsen/crn/data/$EDisplayType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$ModGuiIcons, $ModGuiIcons$Type} from "packages/de/mrjulsen/crn/client/gui/$ModGuiIcons"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$EDisplayType$EDisplayTypeDataSource, $EDisplayType$EDisplayTypeDataSource$Type} from "packages/de/mrjulsen/crn/data/$EDisplayType$EDisplayTypeDataSource"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ITranslatableEnum, $ITranslatableEnum$Type} from "packages/de/mrjulsen/mcdragonlib/core/$ITranslatableEnum"

export class $EDisplayType extends $Enum<($EDisplayType)> implements $StringRepresentable, $ITranslatableEnum {
static readonly "TRAIN_DESTINATION": $EDisplayType
static readonly "PASSENGER_INFORMATION": $EDisplayType
static readonly "PLATFORM": $EDisplayType


public static "values"(): ($EDisplayType)[]
public static "valueOf"(name: string): $EDisplayType
public "getId"(): integer
public "getSource"(): $EDisplayType$EDisplayTypeDataSource
public "getSerializedName"(): string
public "getIcon"(): $ModGuiIcons
public "getEnumName"(): string
public "getInfoTypeName"(): string
public "getEnumValueName"(): string
public static "getTypeById"(id: integer): $EDisplayType
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public "getEnumTranslationKey"(modid: string): string
public "getEnumDescriptionTranslationKey"(modid: string): string
public "getValueTranslationKey"(modid: string): string
public "getValueInfoTranslationKey"(modid: string): string
get "id"(): integer
get "source"(): $EDisplayType$EDisplayTypeDataSource
get "serializedName"(): string
get "icon"(): $ModGuiIcons
get "enumName"(): string
get "infoTypeName"(): string
get "enumValueName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EDisplayType$Type = (("train_destination") | ("passenger_information") | ("platform")) | ($EDisplayType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EDisplayType_ = $EDisplayType$Type;
}}
declare module "packages/de/mrjulsen/mcdragonlib/client/ber/$IBlockEntityRendererInstance" {
import {$FontUtils, $FontUtils$Type} from "packages/de/mrjulsen/mcdragonlib/client/util/$FontUtils"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$IBlockEntityRendererInstance$EUpdateReason, $IBlockEntityRendererInstance$EUpdateReason$Type} from "packages/de/mrjulsen/mcdragonlib/client/ber/$IBlockEntityRendererInstance$EUpdateReason"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IBlockEntityRendererInstance$BlockEntityRendererContext, $IBlockEntityRendererInstance$BlockEntityRendererContext$Type} from "packages/de/mrjulsen/mcdragonlib/client/ber/$IBlockEntityRendererInstance$BlockEntityRendererContext"

export interface $IBlockEntityRendererInstance<T extends $BlockEntity> {

 "update"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, blockEntity: T, reason: $IBlockEntityRendererInstance$EUpdateReason$Type): void
 "tick"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, blockEntity: T): void
 "render"(arg0: $IBlockEntityRendererInstance$BlockEntityRendererContext$Type, arg1: T, arg2: float, arg3: $PoseStack$Type, arg4: $MultiBufferSource$Type, arg5: integer, arg6: integer): void
 "getFontUtils"(): $FontUtils

(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, blockEntity: T, reason: $IBlockEntityRendererInstance$EUpdateReason$Type): void
}

export namespace $IBlockEntityRendererInstance {
const fontUtils: $FontUtils
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockEntityRendererInstance$Type<T> = ($IBlockEntityRendererInstance<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockEntityRendererInstance_<T> = $IBlockEntityRendererInstance$Type<(T)>;
}}
declare module "packages/de/mrjulsen/crn/data/$EDisplayType$EDisplayTypeDataSource" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EDisplayType$EDisplayTypeDataSource extends $Enum<($EDisplayType$EDisplayTypeDataSource)> {
static readonly "TRAIN_INFORMATION": $EDisplayType$EDisplayTypeDataSource
static readonly "PLATFORM": $EDisplayType$EDisplayTypeDataSource


public static "values"(): ($EDisplayType$EDisplayTypeDataSource)[]
public static "valueOf"(name: string): $EDisplayType$EDisplayTypeDataSource
public "getIndex"(): integer
public static "getByIndex"(index: integer): $EDisplayType$EDisplayTypeDataSource
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EDisplayType$EDisplayTypeDataSource$Type = (("train_information") | ("platform")) | ($EDisplayType$EDisplayTypeDataSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EDisplayType$EDisplayTypeDataSource_ = $EDisplayType$EDisplayTypeDataSource$Type;
}}
declare module "packages/de/mrjulsen/crn/block/$AdvancedDisplaySmallBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$EBlockAlignment, $EBlockAlignment$Type} from "packages/de/mrjulsen/crn/data/$EBlockAlignment"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Tripple, $Tripple$Type} from "packages/de/mrjulsen/mcdragonlib/data/$Tripple"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Pair, $Pair$Type} from "packages/de/mrjulsen/mcdragonlib/data/$Pair"
import {$AbstractAdvancedSidedDisplayBlock, $AbstractAdvancedSidedDisplayBlock$Type} from "packages/de/mrjulsen/crn/block/$AbstractAdvancedSidedDisplayBlock"
import {$ESide, $ESide$Type} from "packages/de/mrjulsen/crn/data/$ESide"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AdvancedDisplaySmallBlock extends $AbstractAdvancedSidedDisplayBlock {
static readonly "Y_ALIGN": $EnumProperty<($EBlockAlignment)>
static readonly "Z_ALIGN": $EnumProperty<($EBlockAlignment)>
static readonly "SIDE": $EnumProperty<($ESide)>
static readonly "FACING": $DirectionProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "isSingleLined"(): boolean
public "getRenderRotation"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Tripple<(float), (float), (float)>
public "getRenderZOffset"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Pair<(float), (float)>
public "appendOnPlace"(context: $BlockPlaceContext$Type, state: $BlockState$Type, other: $BlockState$Type): $BlockState
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getRenderOffset"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Pair<(float), (float)>
public "getRenderAspectRatio"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Pair<(float), (float)>
public "getExcludedProperties"(): $Collection<($Property<(any)>)>
public "canConnectWithBlock"(level: $BlockGetter$Type, selfState: $BlockState$Type, otherState: $BlockState$Type): boolean
public "getDefaultPlacementState"(context: $BlockPlaceContext$Type, state: $BlockState$Type, other: $BlockState$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "singleLined"(): boolean
get "excludedProperties"(): $Collection<($Property<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedDisplaySmallBlock$Type = ($AdvancedDisplaySmallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedDisplaySmallBlock_ = $AdvancedDisplaySmallBlock$Type;
}}
declare module "packages/de/mrjulsen/crn/data/$CarriageData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $CarriageData extends $Record {

constructor(index: integer, assemblyDirection: $Direction$Type, isOppositeDirection: boolean)

public "index"(): integer
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "assemblyDirection"(): $Direction
public "isOppositeDirection"(): boolean
get "oppositeDirection"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarriageData$Type = ($CarriageData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarriageData_ = $CarriageData$Type;
}}
declare module "packages/de/mrjulsen/mcdragonlib/client/util/$BERUtils" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $BERUtils {
static readonly "BLANK_TEXTURE_LOCATION": $ResourceLocation

constructor()

public "renderTexture"(texture: $ResourceLocation$Type, bufferSource: $MultiBufferSource$Type, blockEntity: $BlockEntity$Type, poseStack: $PoseStack$Type, ao: boolean, x: float, y: float, z: float, w: float, h: float, u0: float, v0: float, u1: float, v1: float, facing: $Direction$Type, tint: integer, light: integer): void
public static "addQuadSide"(be: $BlockEntity$Type, state: $BlockState$Type, direction: $Direction$Type, builder: $VertexConsumer$Type, pPoseStack: $PoseStack$Type, ao: boolean, x0: float, y0: float, z0: float, x1: float, y1: float, z1: float, u0: float, v0: float, u1: float, v1: float, r: float, g: float, b: float, a: float, packedLight: integer): void
public static "addVert"(builder: $VertexConsumer$Type, pPoseStack: $PoseStack$Type, x: float, y: float, z: float, u: float, v: float, r: float, g: float, b: float, a: float, lu: integer, lv: integer): void
public "fillColor"(pBufferSource: $MultiBufferSource$Type, blockEntity: $BlockEntity$Type, color: integer, poseStack: $PoseStack$Type, x: float, y: float, z: float, w: float, h: float, facing: $Direction$Type, light: integer): void
public "initRenderEngine"(): void
public "setTint"(r: integer, g: integer, b: integer, a: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BERUtils$Type = ($BERUtils);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BERUtils_ = $BERUtils$Type;
}}
declare module "packages/de/mrjulsen/mcdragonlib/mixin/$AbstractWidgetAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AbstractWidgetAccessor {

 "setHeight"(arg0: integer): void

(arg0: integer): void
}

export namespace $AbstractWidgetAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractWidgetAccessor$Type = ($AbstractWidgetAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractWidgetAccessor_ = $AbstractWidgetAccessor$Type;
}}
declare module "packages/de/mrjulsen/mcdragonlib/data/$Single" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Single<A> {

constructor(value1: A)

public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"<A>(first: A): $Single<(A)>
public "getFirst"(): A
get "first"(): A
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Single$Type<A> = ($Single<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Single_<A> = $Single$Type<(A)>;
}}
declare module "packages/de/mrjulsen/crn/block/$AbstractAdvancedSidedDisplayBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AbstractAdvancedDisplayBlock, $AbstractAdvancedDisplayBlock$Type} from "packages/de/mrjulsen/crn/block/$AbstractAdvancedDisplayBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ESide, $ESide$Type} from "packages/de/mrjulsen/crn/data/$ESide"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AbstractAdvancedSidedDisplayBlock extends $AbstractAdvancedDisplayBlock {
static readonly "SIDE": $EnumProperty<($ESide)>
static readonly "FACING": $DirectionProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "appendOnPlace"(context: $BlockPlaceContext$Type, state: $BlockState$Type, other: $BlockState$Type): $BlockState
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAdvancedSidedDisplayBlock$Type = ($AbstractAdvancedSidedDisplayBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAdvancedSidedDisplayBlock_ = $AbstractAdvancedSidedDisplayBlock$Type;
}}
declare module "packages/de/mrjulsen/mcdragonlib/core/$ITranslatableEnum" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITranslatableEnum {

 "getEnumTranslationKey"(modid: string): string
 "getEnumDescriptionTranslationKey"(modid: string): string
 "getValueTranslationKey"(modid: string): string
 "getValueInfoTranslationKey"(modid: string): string
 "getEnumName"(): string
 "getEnumValueName"(): string
}

export namespace $ITranslatableEnum {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITranslatableEnum$Type = ($ITranslatableEnum);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITranslatableEnum_ = $ITranslatableEnum$Type;
}}
declare module "packages/de/mrjulsen/crn/block/$AdvancedDisplayBoardBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$EBlockAlignment, $EBlockAlignment$Type} from "packages/de/mrjulsen/crn/data/$EBlockAlignment"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Tripple, $Tripple$Type} from "packages/de/mrjulsen/mcdragonlib/data/$Tripple"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Pair, $Pair$Type} from "packages/de/mrjulsen/mcdragonlib/data/$Pair"
import {$AbstractAdvancedSidedDisplayBlock, $AbstractAdvancedSidedDisplayBlock$Type} from "packages/de/mrjulsen/crn/block/$AbstractAdvancedSidedDisplayBlock"
import {$ESide, $ESide$Type} from "packages/de/mrjulsen/crn/data/$ESide"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AdvancedDisplayBoardBlock extends $AbstractAdvancedSidedDisplayBlock {
static readonly "Z_ALIGN": $EnumProperty<($EBlockAlignment)>
static readonly "SIDE": $EnumProperty<($ESide)>
static readonly "FACING": $DirectionProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "isSingleLined"(): boolean
public "getRenderRotation"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Tripple<(float), (float), (float)>
public "getRenderZOffset"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Pair<(float), (float)>
public "appendOnPlace"(context: $BlockPlaceContext$Type, state: $BlockState$Type, other: $BlockState$Type): $BlockState
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getBlockSupportShape"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "getRenderOffset"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Pair<(float), (float)>
public "getRenderAspectRatio"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Pair<(float), (float)>
public "getExcludedProperties"(): $Collection<($Property<(any)>)>
public "canConnectWithBlock"(level: $BlockGetter$Type, selfState: $BlockState$Type, otherState: $BlockState$Type): boolean
public "getDefaultPlacementState"(context: $BlockPlaceContext$Type, state: $BlockState$Type, other: $BlockState$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "singleLined"(): boolean
get "excludedProperties"(): $Collection<($Property<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedDisplayBoardBlock$Type = ($AdvancedDisplayBoardBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedDisplayBoardBlock_ = $AdvancedDisplayBoardBlock$Type;
}}
declare module "packages/de/mrjulsen/crn/data/$EDisplayInfo" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$ModGuiIcons, $ModGuiIcons$Type} from "packages/de/mrjulsen/crn/client/gui/$ModGuiIcons"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ITranslatableEnum, $ITranslatableEnum$Type} from "packages/de/mrjulsen/mcdragonlib/core/$ITranslatableEnum"

export class $EDisplayInfo extends $Enum<($EDisplayInfo)> implements $StringRepresentable, $ITranslatableEnum {
static readonly "SIMPLE": $EDisplayInfo
static readonly "DETAILED": $EDisplayInfo
static readonly "INFORMATIVE": $EDisplayInfo


public static "values"(): ($EDisplayInfo)[]
public static "valueOf"(name: string): $EDisplayInfo
public "getId"(): integer
public "getSerializedName"(): string
public "getIcon"(): $ModGuiIcons
public "getEnumName"(): string
public "getInfoTypeName"(): string
public "getEnumValueName"(): string
public static "getTypeById"(id: integer): $EDisplayInfo
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public "getEnumTranslationKey"(modid: string): string
public "getEnumDescriptionTranslationKey"(modid: string): string
public "getValueTranslationKey"(modid: string): string
public "getValueInfoTranslationKey"(modid: string): string
get "id"(): integer
get "serializedName"(): string
get "icon"(): $ModGuiIcons
get "enumName"(): string
get "infoTypeName"(): string
get "enumValueName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EDisplayInfo$Type = (("detailed") | ("simple") | ("informative")) | ($EDisplayInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EDisplayInfo_ = $EDisplayInfo$Type;
}}
declare module "packages/de/mrjulsen/crn/block/$AdvancedDisplayHalfPanelBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$EBlockAlignment, $EBlockAlignment$Type} from "packages/de/mrjulsen/crn/data/$EBlockAlignment"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Tripple, $Tripple$Type} from "packages/de/mrjulsen/mcdragonlib/data/$Tripple"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Pair, $Pair$Type} from "packages/de/mrjulsen/mcdragonlib/data/$Pair"
import {$AbstractAdvancedSidedDisplayBlock, $AbstractAdvancedSidedDisplayBlock$Type} from "packages/de/mrjulsen/crn/block/$AbstractAdvancedSidedDisplayBlock"
import {$ESide, $ESide$Type} from "packages/de/mrjulsen/crn/data/$ESide"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AdvancedDisplayHalfPanelBlock extends $AbstractAdvancedSidedDisplayBlock {
static readonly "Y_ALIGN": $EnumProperty<($EBlockAlignment)>
static readonly "Z_ALIGN": $EnumProperty<($EBlockAlignment)>
static readonly "SIDE": $EnumProperty<($ESide)>
static readonly "FACING": $DirectionProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "isSingleLined"(): boolean
public "getRenderRotation"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Tripple<(float), (float), (float)>
public "getRenderZOffset"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Pair<(float), (float)>
public "appendOnPlace"(context: $BlockPlaceContext$Type, state: $BlockState$Type, other: $BlockState$Type): $BlockState
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getRenderOffset"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Pair<(float), (float)>
public "getRenderAspectRatio"(level: $Level$Type, blockState: $BlockState$Type, pos: $BlockPos$Type): $Pair<(float), (float)>
public "getExcludedProperties"(): $Collection<($Property<(any)>)>
public "canConnectWithBlock"(level: $BlockGetter$Type, selfState: $BlockState$Type, otherState: $BlockState$Type): boolean
public "getDefaultPlacementState"(context: $BlockPlaceContext$Type, state: $BlockState$Type, other: $BlockState$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "singleLined"(): boolean
get "excludedProperties"(): $Collection<($Property<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedDisplayHalfPanelBlock$Type = ($AdvancedDisplayHalfPanelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedDisplayHalfPanelBlock_ = $AdvancedDisplayHalfPanelBlock$Type;
}}
