declare module "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilFrost" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemSigilToggleableBase, $ItemSigilToggleableBase$Type} from "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilToggleableBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSigilFrost extends $ItemSigilToggleableBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "onSigilUpdate"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: integer, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSigilFrost$Type = ($ItemSigilFrost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSigilFrost_ = $ItemSigilFrost$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemActivationCrystal$CrystalType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemActivationCrystal$CrystalType extends $Enum<($ItemActivationCrystal$CrystalType)> {
static readonly "WEAK": $ItemActivationCrystal$CrystalType
static readonly "AWAKENED": $ItemActivationCrystal$CrystalType
static readonly "CREATIVE": $ItemActivationCrystal$CrystalType


public static "values"(): ($ItemActivationCrystal$CrystalType)[]
public static "valueOf"(arg0: string): $ItemActivationCrystal$CrystalType
public static "getStack"(arg0: integer): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemActivationCrystal$CrystalType$Type = (("awakened") | ("creative") | ("weak")) | ($ItemActivationCrystal$CrystalType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemActivationCrystal$CrystalType_ = $ItemActivationCrystal$CrystalType$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemBloodProvider" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBloodProvider extends $Item {
readonly "lpProvided": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: string, arg1: integer)
constructor(arg0: string)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBloodProvider$Type = ($ItemBloodProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBloodProvider_ = $ItemBloodProvider$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$BloodOrb" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $BloodOrb {

constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer)

public "getCapacity"(): integer
public "getResourceLocation"(): $ResourceLocation
public "toString"(): string
public "getFillRate"(): integer
public "getTier"(): integer
get "capacity"(): integer
get "resourceLocation"(): $ResourceLocation
get "fillRate"(): integer
get "tier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodOrb$Type = ($BloodOrb);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloodOrb_ = $BloodOrb$Type;
}}
declare module "packages/wayoftime/bloodmagic/ritual/$Ritual$BreakType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Ritual$BreakType extends $Enum<($Ritual$BreakType)> {
static readonly "REDSTONE": $Ritual$BreakType
static readonly "BREAK_MRS": $Ritual$BreakType
static readonly "BREAK_STONE": $Ritual$BreakType
static readonly "ACTIVATE": $Ritual$BreakType
static readonly "DEACTIVATE": $Ritual$BreakType
static readonly "EXPLOSION": $Ritual$BreakType


public static "values"(): ($Ritual$BreakType)[]
public static "valueOf"(arg0: string): $Ritual$BreakType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ritual$BreakType$Type = (("break_stone") | ("explosion") | ("activate") | ("break_mrs") | ("redstone") | ("deactivate")) | ($Ritual$BreakType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ritual$BreakType_ = $Ritual$BreakType$Type;
}}
declare module "packages/wayoftime/bloodmagic/recipe/$RecipeTartaricForge" {
import {$BloodMagicRecipe, $BloodMagicRecipe$Type} from "packages/wayoftime/bloodmagic/recipe/$BloodMagicRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RecipeTartaricForge extends $BloodMagicRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: double, arg4: double)

public "getInput"(): $List<($Ingredient)>
public "write"(arg0: $FriendlyByteBuf$Type): void
public "getSerializer"(): $RecipeSerializer<($RecipeTartaricForge)>
public "getOutput"(): $ItemStack
public "getSoulDrain"(): double
public "getMinimumSouls"(): double
get "input"(): $List<($Ingredient)>
get "serializer"(): $RecipeSerializer<($RecipeTartaricForge)>
get "output"(): $ItemStack
get "soulDrain"(): double
get "minimumSouls"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeTartaricForge$Type = ($RecipeTartaricForge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeTartaricForge_ = $RecipeTartaricForge$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/block/$ItemBlockMimic" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBlockMimic extends $BlockItem {
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

public "place"(arg0: $BlockPlaceContext$Type): $InteractionResult
public "getTagFromTileEntity"(arg0: $BlockEntity$Type): $CompoundTag
public "canReplaceBlock"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "canReplaceTile"(arg0: $BlockEntity$Type): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlockMimic$Type = ($ItemBlockMimic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockMimic_ = $ItemBlockMimic$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/routing/$IFilterKey" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFilterKey {

 "isEmpty"(): boolean
 "grow"(arg0: integer): void
 "getCount"(): integer
 "shrink"(arg0: integer): void
 "setCount"(arg0: integer): void
 "doesStackMatch"(arg0: $ItemStack$Type): boolean
}

export namespace $IFilterKey {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFilterKey$Type = ($IFilterKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFilterKey_ = $IFilterKey$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockRitualStone" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IRitualStone, $IRitualStone$Type} from "packages/wayoftime/bloodmagic/ritual/$IRitualStone"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnumRuneType, $EnumRuneType$Type} from "packages/wayoftime/bloodmagic/ritual/$EnumRuneType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockRitualStone extends $Block implements $IRitualStone {
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

constructor(arg0: $EnumRuneType$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "setRuneType"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $EnumRuneType$Type): void
public "isRuneType"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $EnumRuneType$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRitualStone$Type = ($BlockRitualStone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRitualStone_ = $BlockRitualStone$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/routing/$IRoutingFilterProvider" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IRoutingFilterProvider {

 "getContainedStackForItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack

(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
}

export namespace $IRoutingFilterProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRoutingFilterProvider$Type = ($IRoutingFilterProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRoutingFilterProvider_ = $IRoutingFilterProvider$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockMasterRoutingNode" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockItemRoutingNode, $BlockItemRoutingNode$Type} from "packages/wayoftime/bloodmagic/common/block/$BlockItemRoutingNode"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockMasterRoutingNode extends $BlockItemRoutingNode {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
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

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMasterRoutingNode$Type = ($BlockMasterRoutingNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMasterRoutingNode_ = $BlockMasterRoutingNode$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/base/$BlockPillarCap" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockPillarCap extends $Block {
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPillarCap$Type = ($BlockPillarCap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPillarCap_ = $BlockPillarCap$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/soul/$ItemSentientShovel" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ShovelItem, $ShovelItem$Type} from "packages/net/minecraft/world/item/$ShovelItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDemonWillWeapon, $IDemonWillWeapon$Type} from "packages/wayoftime/bloodmagic/api/compat/$IDemonWillWeapon"
import {$IMultiWillTool, $IMultiWillTool$Type} from "packages/wayoftime/bloodmagic/api/compat/$IMultiWillTool"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSentientShovel extends $ShovelItem implements $IDemonWillWeapon, $IMultiWillTool {
static "soulBracket": (integer)[]
static "defaultDamageAdded": (double)[]
static "destructiveDamageAdded": (double)[]
static "vengefulDamageAdded": (double)[]
static "steadfastDamageAdded": (double)[]
static "defaultDigSpeedAdded": (double)[]
static "soulDrainPerSwing": (double)[]
static "soulDrop": (double)[]
static "staticDrop": (double)[]
static "healthBonus": (double)[]
static "vengefulAttackSpeed": (double)[]
static "destructiveAttackSpeed": (double)[]
static "absorptionTime": (integer)[]
static "maxAbsorptionHearts": double
static "poisonTime": (integer)[]
static "poisonLevel": (integer)[]
static "movementSpeed": (double)[]
static readonly "baseAttackDamage": double
static readonly "baseAttackSpeed": double
static "FLATTENABLES": $Map<($Block), ($BlockState)>
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

constructor()

public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "getDigSpeed"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "getMovementSpeed"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "getRandomDemonWillDrop"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): $List<($ItemStack)>
public "getDropOfActivatedSword"(arg0: $ItemStack$Type): double
public "setDamageOfActivatedSword"(arg0: $ItemStack$Type, arg1: double): void
public "setAttackSpeedOfSword"(arg0: $ItemStack$Type, arg1: double): void
public "getDamageOfActivatedSword"(arg0: $ItemStack$Type): double
public "setDropOfActivatedSword"(arg0: $ItemStack$Type, arg1: double): void
public "applyEffectToEntity"(arg0: $EnumDemonWillType$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $Player$Type): void
public "setHealthBonusOfSword"(arg0: $ItemStack$Type, arg1: double): void
public "getStaticDropOfActivatedSword"(arg0: $ItemStack$Type): double
public "getAttackSpeedOfSword"(arg0: $ItemStack$Type): double
public "getHealthBonusOfSword"(arg0: $ItemStack$Type): double
public "setStaticDropOfActivatedSword"(arg0: $ItemStack$Type, arg1: double): void
public "setDrainOfActivatedSword"(arg0: $ItemStack$Type, arg1: double): void
public "getDrainOfActivatedSword"(arg0: $ItemStack$Type): double
public "getHealthBonus"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "getExtraDamage"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "recalculatePowers"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "setCurrentType"(arg0: $ItemStack$Type, arg1: $EnumDemonWillType$Type): void
public "getDigSpeedOfSword"(arg0: $ItemStack$Type): double
public "setSpeedOfSword"(arg0: $ItemStack$Type, arg1: double): void
public "setDigSpeedOfSword"(arg0: $ItemStack$Type, arg1: double): void
public "getSpeedOfSword"(arg0: $ItemStack$Type): double
public "getAttackSpeed"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "getCurrentType"(arg0: $ItemStack$Type): $EnumDemonWillType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSentientShovel$Type = ($ItemSentientShovel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSentientShovel_ = $ItemSentientShovel$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/inventory/$InventoryTrainingBracelet" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ItemInventory, $ItemInventory$Type} from "packages/wayoftime/bloodmagic/common/item/inventory/$ItemInventory"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $InventoryTrainingBracelet extends $ItemInventory {

constructor(arg0: $ItemStack$Type)

public "save"(): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getMaxStackSize"(): integer
public "findParentStack"(arg0: $Player$Type): $ItemStack
public "onGuiSaved"(arg0: $Player$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "maxStackSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryTrainingBracelet$Type = ($InventoryTrainingBracelet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryTrainingBracelet_ = $InventoryTrainingBracelet$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilToggleable" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemSigil, $ItemSigil$Type} from "packages/wayoftime/bloodmagic/common/item/$ItemSigil"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$IActivatable, $IActivatable$Type} from "packages/wayoftime/bloodmagic/common/item/$IActivatable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemSigilToggleable extends $ItemSigil implements $IActivatable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: integer)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getActivated"(arg0: $ItemStack$Type): boolean
public "setActivatedState"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
public "onSigilUpdate"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: integer, arg4: boolean): void
public "onSigilUse"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $Direction$Type, arg5: $Vec3$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSigilToggleable$Type = ($ItemSigilToggleable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSigilToggleable_ = $ItemSigilToggleable$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockShapedExplosive" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockShapedExplosive extends $Block implements $EntityBlock {
static readonly "ATTACHED": $EnumProperty<($Direction)>
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

constructor(arg0: integer, arg1: $BlockBehaviour$Properties$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockShapedExplosive$Type = ($BlockShapedExplosive);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockShapedExplosive_ = $BlockShapedExplosive$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionTransformRecipeSerializer$IFactory" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$RecipePotionTransform, $RecipePotionTransform$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionTransform"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export interface $PotionTransformRecipeSerializer$IFactory<RECIPE extends $RecipePotionTransform> {

 "create"(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $List$Type<($Pair$Type<($MobEffect$Type), (integer)>)>, arg3: $List$Type<($MobEffect$Type)>, arg4: integer, arg5: integer, arg6: integer): RECIPE

(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $List$Type<($Pair$Type<($MobEffect$Type), (integer)>)>, arg3: $List$Type<($MobEffect$Type)>, arg4: integer, arg5: integer, arg6: integer): RECIPE
}

export namespace $PotionTransformRecipeSerializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionTransformRecipeSerializer$IFactory$Type<RECIPE> = ($PotionTransformRecipeSerializer$IFactory<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionTransformRecipeSerializer$IFactory_<RECIPE> = $PotionTransformRecipeSerializer$IFactory$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionTransform" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$EffectHolder, $EffectHolder$Type} from "packages/wayoftime/bloodmagic/recipe/$EffectHolder"
import {$RecipePotionFlaskBase, $RecipePotionFlaskBase$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionFlaskBase"

export class $RecipePotionTransform extends $RecipePotionFlaskBase {
 "outputEffectList": $List<($Pair<($MobEffect), (integer)>)>
 "inputEffectList": $List<($MobEffect)>
static readonly "MAX_INPUTS": integer

constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $List$Type<($Pair$Type<($MobEffect$Type), (integer)>)>, arg3: $List$Type<($MobEffect$Type)>, arg4: integer, arg5: integer, arg6: integer)

public "write"(arg0: $FriendlyByteBuf$Type): void
public "getPriority"(arg0: $List$Type<($EffectHolder$Type)>): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "getOutput"(arg0: $ItemStack$Type, arg1: $List$Type<($EffectHolder$Type)>): $ItemStack
public "getExampleEffectList"(): $List<($EffectHolder)>
public "canModifyFlask"(arg0: $ItemStack$Type, arg1: $List$Type<($EffectHolder$Type)>): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "exampleEffectList"(): $List<($EffectHolder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipePotionTransform$Type = ($RecipePotionTransform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipePotionTransform_ = $RecipePotionTransform$Type;
}}
declare module "packages/wayoftime/bloodmagic/potion/$PotionHeavyHeart" {
import {$PotionBloodMagic, $PotionBloodMagic$Type} from "packages/wayoftime/bloodmagic/potion/$PotionBloodMagic"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $PotionHeavyHeart extends $PotionBloodMagic {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionHeavyHeart$Type = ($PotionHeavyHeart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionHeavyHeart_ = $PotionHeavyHeart$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionEffectRecipeSerializer$IFactory" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$RecipePotionEffect, $RecipePotionEffect$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionEffect"

export interface $PotionEffectRecipeSerializer$IFactory<RECIPE extends $RecipePotionEffect> {

 "create"(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $MobEffect$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer): RECIPE

(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $MobEffect$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer): RECIPE
}

export namespace $PotionEffectRecipeSerializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionEffectRecipeSerializer$IFactory$Type<RECIPE> = ($PotionEffectRecipeSerializer$IFactory<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionEffectRecipeSerializer$IFactory_<RECIPE> = $PotionEffectRecipeSerializer$IFactory$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilFastMiner" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemSigilToggleableBase, $ItemSigilToggleableBase$Type} from "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilToggleableBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSigilFastMiner extends $ItemSigilToggleableBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "hasArrayEffect"(): boolean
public "performArrayEffect"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "onSigilUpdate"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: integer, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSigilFastMiner$Type = ($ItemSigilFastMiner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSigilFastMiner_ = $ItemSigilFastMiner$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/inventory/$InventoryFilter" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ItemInventory, $ItemInventory$Type} from "packages/wayoftime/bloodmagic/common/item/inventory/$ItemInventory"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $InventoryFilter extends $ItemInventory {

constructor(arg0: $ItemStack$Type)

public "save"(): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getMaxStackSize"(): integer
public "findParentStack"(arg0: $Player$Type): $ItemStack
public "onGuiSaved"(arg0: $Player$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "maxStackSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryFilter$Type = ($InventoryFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryFilter_ = $InventoryFilter$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockGrowingDoubt" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CropBlock, $CropBlock$Type} from "packages/net/minecraft/world/level/block/$CropBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockGrowingDoubt extends $CropBlock {
static readonly "MAX_AGE": integer
static readonly "AGE": $IntegerProperty
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGrowingDoubt$Type = ($BlockGrowingDoubt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockGrowingDoubt_ = $BlockGrowingDoubt$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockInputRoutingNode" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockItemRoutingNode, $BlockItemRoutingNode$Type} from "packages/wayoftime/bloodmagic/common/block/$BlockItemRoutingNode"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockInputRoutingNode extends $BlockItemRoutingNode {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
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

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockInputRoutingNode$Type = ($BlockInputRoutingNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockInputRoutingNode_ = $BlockInputRoutingNode$Type;
}}
declare module "packages/wayoftime/bloodmagic/api/compat/$IDemonWill" {
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IDemonWill {

 "getType"(arg0: $ItemStack$Type): $EnumDemonWillType
 "getWill"(arg0: $EnumDemonWillType$Type, arg1: $ItemStack$Type): double
 "createWill"(arg0: double): $ItemStack
 "drainWill"(arg0: $EnumDemonWillType$Type, arg1: $ItemStack$Type, arg2: double): double
 "setWill"(arg0: $EnumDemonWillType$Type, arg1: $ItemStack$Type, arg2: double): boolean
}

export namespace $IDemonWill {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDemonWill$Type = ($IDemonWill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDemonWill_ = $IDemonWill$Type;
}}
declare module "packages/wayoftime/bloodmagic/potion/$PotionFireFuse" {
import {$PotionBloodMagic, $PotionBloodMagic$Type} from "packages/wayoftime/bloodmagic/potion/$PotionBloodMagic"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $PotionFireFuse extends $PotionBloodMagic {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionFireFuse$Type = ($PotionFireFuse);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionFireFuse_ = $PotionFireFuse$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockRoutingNode" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockRoutingNode extends $Block {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
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

public "canConnect"(arg0: $BlockState$Type, arg1: boolean, arg2: $Direction$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRoutingNode$Type = ($BlockRoutingNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRoutingNode_ = $BlockRoutingNode$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockInversionPillar" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockInversionPillar extends $Block implements $EntityBlock {
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
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockInversionPillar$Type = ($BlockInversionPillar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockInversionPillar_ = $BlockInversionPillar$Type;
}}
declare module "packages/wayoftime/bloodmagic/core/living/$ILivingContainer" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LivingStats, $LivingStats$Type} from "packages/wayoftime/bloodmagic/core/living/$LivingStats"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ILivingContainer {

 "getLivingStats"(arg0: $ItemStack$Type): $LivingStats
 "updateLivingStats"(arg0: $ItemStack$Type, arg1: $LivingStats$Type): void
}

export namespace $ILivingContainer {
function appendLivingTooltip(arg0: $ItemStack$Type, arg1: $LivingStats$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
function setDisplayIfZero(arg0: $ItemStack$Type, arg1: boolean): void
function displayIfLevelZero(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILivingContainer$Type = ($ILivingContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILivingContainer_ = $ILivingContainer$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/routing/$ItemModFilter" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemRouterFilter, $ItemRouterFilter$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$ItemRouterFilter"
import {$IFilterKey, $IFilterKey$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$IFilterKey"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INestableItemFilterProvider, $INestableItemFilterProvider$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$INestableItemFilterProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemModFilter extends $ItemRouterFilter implements $INestableItemFilterProvider {
static readonly "inventorySize": integer
static readonly "maxUpgrades": integer
static readonly "FILTER_INV": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getFilterKey"(arg0: $ItemStack$Type, arg1: integer, arg2: $ItemStack$Type, arg3: integer): $IFilterKey
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModFilter$Type = ($ItemModFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModFilter_ = $ItemModFilter$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/dungeon/$ItemDungeonKey" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemDungeonKeyBase, $ItemDungeonKeyBase$Type} from "packages/wayoftime/bloodmagic/common/item/dungeon/$ItemDungeonKeyBase"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDungeonKey extends $ItemDungeonKeyBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: string, ...arg1: (string)[])

public "getValidResourceLocation"(arg0: $List$Type<($ResourceLocation$Type)>): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDungeonKey$Type = ($ItemDungeonKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDungeonKey_ = $ItemDungeonKey$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$MeteorRecipeSerializer$IFactory" {
import {$RecipeMeteor, $RecipeMeteor$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeMeteor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MeteorLayer, $MeteorLayer$Type} from "packages/wayoftime/bloodmagic/common/meteor/$MeteorLayer"

export interface $MeteorRecipeSerializer$IFactory<RECIPE extends $RecipeMeteor> {

 "create"(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: integer, arg3: float, arg4: $List$Type<($MeteorLayer$Type)>): RECIPE

(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: integer, arg3: float, arg4: $List$Type<($MeteorLayer$Type)>): RECIPE
}

export namespace $MeteorRecipeSerializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeteorRecipeSerializer$IFactory$Type<RECIPE> = ($MeteorRecipeSerializer$IFactory<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeteorRecipeSerializer$IFactory_<RECIPE> = $MeteorRecipeSerializer$IFactory$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/core/data/$SoulTicket" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CommandSource, $CommandSource$Type} from "packages/net/minecraft/commands/$CommandSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SoulTicket {

constructor(arg0: $Component$Type, arg1: integer)
constructor(arg0: integer)

public "getDescription"(): $Component
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "item"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer): $SoulTicket
public static "item"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer): $SoulTicket
public static "item"(arg0: $ItemStack$Type, arg1: integer): $SoulTicket
public static "block"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer): $SoulTicket
public static "command"(arg0: $CommandSource$Type, arg1: string, arg2: integer): $SoulTicket
public "isSyphon"(): boolean
public "getAmount"(): integer
get "description"(): $Component
get "syphon"(): boolean
get "amount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulTicket$Type = ($SoulTicket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulTicket_ = $SoulTicket$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/dungeon/$IDungeonKey" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IDungeonKey {

 "getValidResourceLocation"(arg0: $List$Type<($ResourceLocation$Type)>): $ResourceLocation

(arg0: $List$Type<($ResourceLocation$Type)>): $ResourceLocation
}

export namespace $IDungeonKey {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDungeonKey$Type = ($IDungeonKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDungeonKey_ = $IDungeonKey$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockSpikeTrap" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
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
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockSpikeTrap extends $Block implements $EntityBlock {
static readonly "ACTIVE": $BooleanProperty
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSpikeTrap$Type = ($BlockSpikeTrap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSpikeTrap_ = $BlockSpikeTrap$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilFluidBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemSigilBase, $ItemSigilBase$Type} from "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilBase"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSigilFluidBase extends $ItemSigilBase {
readonly "sigilFluid": $FluidStack
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: string)
constructor(arg0: string, arg1: $FluidStack$Type)
constructor(arg0: string, arg1: integer, arg2: $FluidStack$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSigilFluidBase$Type = ($ItemSigilFluidBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSigilFluidBase_ = $ItemSigilFluidBase$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemAnointmentProvider" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemAnointmentProvider extends $Item {
 "anointRL": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer)

public "getColor"(): integer
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isItemValidForApplication"(arg0: $ItemStack$Type): boolean
public static "isItemTool"(arg0: $ItemStack$Type): boolean
public static "isItemSword"(arg0: $ItemStack$Type): boolean
public static "validToolActions"(): $List<($ToolAction)>
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAnointmentProvider$Type = ($ItemAnointmentProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAnointmentProvider_ = $ItemAnointmentProvider$Type;
}}
declare module "packages/wayoftime/bloodmagic/recipe/$RecipeBloodAltar" {
import {$BloodMagicRecipe, $BloodMagicRecipe$Type} from "packages/wayoftime/bloodmagic/recipe/$BloodMagicRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RecipeBloodAltar extends $BloodMagicRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer)

public "getInput"(): $Ingredient
public "write"(arg0: $FriendlyByteBuf$Type): void
public "getSerializer"(): $RecipeSerializer<($RecipeBloodAltar)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getOutput"(): $ItemStack
public "getConsumeRate"(): integer
public "getDrainRate"(): integer
public "getMinimumTier"(): integer
public "getSyphon"(): integer
get "input"(): $Ingredient
get "serializer"(): $RecipeSerializer<($RecipeBloodAltar)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "output"(): $ItemStack
get "consumeRate"(): integer
get "drainRate"(): integer
get "minimumTier"(): integer
get "syphon"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBloodAltar$Type = ($RecipeBloodAltar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeBloodAltar_ = $RecipeBloodAltar$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/type/$PillarCapType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $PillarCapType extends $Enum<($PillarCapType)> implements $StringRepresentable {
static readonly "TOP": $PillarCapType
static readonly "BOTTOM": $PillarCapType


public "toString"(): string
public static "values"(): ($PillarCapType)[]
public static "valueOf"(arg0: string): $PillarCapType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PillarCapType$Type = (("top") | ("bottom")) | ($PillarCapType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PillarCapType_ = $PillarCapType$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/soul/$ItemSentientAxe" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AxeItem, $AxeItem$Type} from "packages/net/minecraft/world/item/$AxeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDemonWillWeapon, $IDemonWillWeapon$Type} from "packages/wayoftime/bloodmagic/api/compat/$IDemonWillWeapon"
import {$IMultiWillTool, $IMultiWillTool$Type} from "packages/wayoftime/bloodmagic/api/compat/$IMultiWillTool"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSentientAxe extends $AxeItem implements $IDemonWillWeapon, $IMultiWillTool {
static "soulBracket": (integer)[]
static "defaultDamageAdded": (double)[]
static "destructiveDamageAdded": (double)[]
static "vengefulDamageAdded": (double)[]
static "steadfastDamageAdded": (double)[]
static "defaultDigSpeedAdded": (double)[]
static "soulDrainPerSwing": (double)[]
static "soulDrop": (double)[]
static "staticDrop": (double)[]
static "healthBonus": (double)[]
static "vengefulAttackSpeed": (double)[]
static "destructiveAttackSpeed": (double)[]
static "absorptionTime": (integer)[]
static "maxAbsorptionHearts": double
static "poisonTime": (integer)[]
static "poisonLevel": (integer)[]
static "movementSpeed": (double)[]
readonly "baseAttackDamage": double
readonly "baseAttackSpeed": double
static "STRIPPABLES": $Map<($Block), ($Block)>
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

constructor()

public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "getDigSpeed"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "getMovementSpeed"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "getRandomDemonWillDrop"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): $List<($ItemStack)>
public "getDropOfActivatedSword"(arg0: $ItemStack$Type): double
public "setDamageOfActivatedSword"(arg0: $ItemStack$Type, arg1: double): void
public "setAttackSpeedOfSword"(arg0: $ItemStack$Type, arg1: double): void
public "getDamageOfActivatedSword"(arg0: $ItemStack$Type): double
public "setDropOfActivatedSword"(arg0: $ItemStack$Type, arg1: double): void
public "applyEffectToEntity"(arg0: $EnumDemonWillType$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $Player$Type): void
public "setHealthBonusOfSword"(arg0: $ItemStack$Type, arg1: double): void
public "getStaticDropOfActivatedSword"(arg0: $ItemStack$Type): double
public "getAttackSpeedOfSword"(arg0: $ItemStack$Type): double
public "getHealthBonusOfSword"(arg0: $ItemStack$Type): double
public "setStaticDropOfActivatedSword"(arg0: $ItemStack$Type, arg1: double): void
public "setDrainOfActivatedSword"(arg0: $ItemStack$Type, arg1: double): void
public "getDrainOfActivatedSword"(arg0: $ItemStack$Type): double
public "getHealthBonus"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "getExtraDamage"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "recalculatePowers"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "setCurrentType"(arg0: $ItemStack$Type, arg1: $EnumDemonWillType$Type): void
public "getDigSpeedOfSword"(arg0: $ItemStack$Type): double
public "setSpeedOfSword"(arg0: $ItemStack$Type, arg1: double): void
public "setDigSpeedOfSword"(arg0: $ItemStack$Type, arg1: double): void
public "getSpeedOfSword"(arg0: $ItemStack$Type): double
public "getAttackSpeed"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "getCurrentType"(arg0: $ItemStack$Type): $EnumDemonWillType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSentientAxe$Type = ($ItemSentientAxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSentientAxe_ = $ItemSentientAxe$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockPath" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IIncensePath, $IIncensePath$Type} from "packages/wayoftime/bloodmagic/api/compat/$IIncensePath"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BlockPath extends $Block implements $IIncensePath {
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

constructor(arg0: integer, arg1: $BlockBehaviour$Properties$Type)

public "getLevelOfPath"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPath$Type = ($BlockPath);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPath_ = $BlockPath$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockAlchemyArray" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BlockAlchemyArray extends $Block implements $EntityBlock {
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
public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAlchemyArray$Type = ($BlockAlchemyArray);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAlchemyArray_ = $BlockAlchemyArray$Type;
}}
declare module "packages/wayoftime/bloodmagic/entity/projectile/$EntityPotionFlask" {
import {$ThrowableItemProjectile, $ThrowableItemProjectile$Type} from "packages/net/minecraft/world/entity/projectile/$ThrowableItemProjectile"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$ItemSupplier, $ItemSupplier$Type} from "packages/net/minecraft/world/entity/projectile/$ItemSupplier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityPotionFlask extends $ThrowableItemProjectile implements $ItemSupplier {
 "isLingering": boolean
static readonly "WATER_SENSITIVE": $Predicate<($LivingEntity)>
 "leftOwner": boolean
 "hasBeenShot": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "vehicle": $Entity
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "position": $Vec3
 "blockPosition": $BlockPos
 "yRot": float
 "xRot": float
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "nextStep": float
 "xOld": double
 "yOld": double
 "zOld": double
 "stepHeight": float
 "noPhysics": boolean
 "age": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "levelCallback": $EntityInLevelCallback
 "noCulling": boolean
 "hasImpulse": boolean
 "portalEntrancePos": $BlockPos
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>

constructor(arg0: $Level$Type, arg1: double, arg2: double, arg3: double)
constructor(arg0: $Level$Type, arg1: $LivingEntity$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
public "setIsLingering"(arg0: boolean): void
public "extinguishFires"(arg0: $BlockPos$Type, arg1: $Direction$Type): void
public "isLingering"(): boolean
public "makeAreaOfEffectCloud"(arg0: $ItemStack$Type, arg1: $Potion$Type): void
public "getItem"(): $ItemStack
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
get "lingering"(): boolean
get "item"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPotionFlask$Type = ($EntityPotionFlask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityPotionFlask_ = $EntityPotionFlask$Type;
}}
declare module "packages/wayoftime/bloodmagic/recipe/$RecipeAlchemyTable" {
import {$BloodMagicRecipe, $BloodMagicRecipe$Type} from "packages/wayoftime/bloodmagic/recipe/$BloodMagicRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RecipeAlchemyTable extends $BloodMagicRecipe {
static readonly "MAX_INPUTS": integer

constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: integer, arg4: integer, arg5: integer)

public "getInput"(): $List<($Ingredient)>
public "write"(arg0: $FriendlyByteBuf$Type): void
public "getSerializer"(): $RecipeSerializer<(any)>
public "getOutput"(arg0: $List$Type<($ItemStack$Type)>): $ItemStack
public "getOutput"(): $ItemStack
public "getTicks"(): integer
public "getMinimumTier"(): integer
public "getSyphon"(): integer
get "input"(): $List<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "output"(): $ItemStack
get "ticks"(): integer
get "minimumTier"(): integer
get "syphon"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeAlchemyTable$Type = ($RecipeAlchemyTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeAlchemyTable_ = $RecipeAlchemyTable$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockMasterRitualStone" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockMasterRitualStone extends $Block implements $EntityBlock {
readonly "isInverted": boolean
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

constructor(arg0: boolean)

public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "wasExploded"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMasterRitualStone$Type = ($BlockMasterRitualStone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMasterRitualStone_ = $BlockMasterRitualStone$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemBloodOrb" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemBindableBase, $ItemBindableBase$Type} from "packages/wayoftime/bloodmagic/common/item/$ItemBindableBase"
import {$IBloodOrb, $IBloodOrb$Type} from "packages/wayoftime/bloodmagic/common/item/$IBloodOrb"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IForgeItem, $IForgeItem$Type} from "packages/net/minecraftforge/common/extensions/$IForgeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BloodOrb, $BloodOrb$Type} from "packages/wayoftime/bloodmagic/common/item/$BloodOrb"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBloodOrb extends $ItemBindableBase implements $IBloodOrb, $IForgeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Supplier$Type<($BloodOrb$Type)>)

public "getOrb"(arg0: $ItemStack$Type): $BloodOrb
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBloodOrb$Type = ($ItemBloodOrb);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBloodOrb_ = $ItemBloodOrb$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemCrystalCatalyst" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$TileDemonCrystal, $TileDemonCrystal$Type} from "packages/wayoftime/bloodmagic/common/tile/$TileDemonCrystal"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemCrystalCatalyst extends $Item {
readonly "type": $EnumDemonWillType
readonly "injectedWill": double
readonly "speedModifier": double
readonly "conversionRate": double
readonly "maxInjectedWill": double
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $EnumDemonWillType$Type, arg1: double, arg2: double, arg3: double, arg4: double)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "applyCatalyst"(arg0: $TileDemonCrystal$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCrystalCatalyst$Type = ($ItemCrystalCatalyst);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCrystalCatalyst_ = $ItemCrystalCatalyst$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockDemonCrucible" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockDemonCrucible extends $Block implements $EntityBlock {
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
public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDemonCrucible$Type = ($BlockDemonCrucible);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDemonCrucible_ = $BlockDemonCrucible$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$IActivatable" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IActivatable {

 "getActivated"(arg0: $ItemStack$Type): boolean
 "setActivatedState"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
}

export namespace $IActivatable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IActivatable$Type = ($IActivatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IActivatable_ = $IActivatable$Type;
}}
declare module "packages/wayoftime/bloodmagic/core/data/$Binding" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $Binding implements $INBTSerializable<($CompoundTag)> {

constructor(arg0: $UUID$Type, arg1: string)

public "toString"(): string
public "getOwnerName"(): string
public "getOwnerId"(): $UUID
public static "fromStack"(arg0: $ItemStack$Type): $Binding
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "setOwnerName"(arg0: string): $Binding
public "setOwnerId"(arg0: $UUID$Type): $Binding
get "ownerName"(): string
get "ownerId"(): $UUID
set "ownerName"(value: string)
set "ownerId"(value: $UUID$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Binding$Type = ($Binding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Binding_ = $Binding$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/arc/$ItemARCToolBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IARCTool, $IARCTool$Type} from "packages/wayoftime/bloodmagic/common/item/arc/$IARCTool"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemARCToolBase extends $Item implements $IARCTool {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: integer, arg1: double, arg2: double, arg3: $EnumDemonWillType$Type)
constructor(arg0: integer, arg1: double, arg2: double)
constructor(arg0: integer, arg1: double, arg2: $EnumDemonWillType$Type)
constructor(arg0: integer, arg1: double)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDominantWillType"(arg0: $ItemStack$Type): $EnumDemonWillType
public "getCraftingSpeedMultiplier"(arg0: $ItemStack$Type): double
public "getAdditionalOutputChanceMultiplier"(arg0: $ItemStack$Type): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemARCToolBase$Type = ($ItemARCToolBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemARCToolBase_ = $ItemARCToolBase$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/registration/$WrappedDeferredRegister" {
import {$IEventBus, $IEventBus$Type} from "packages/net/minecraftforge/eventbus/api/$IEventBus"

export class $WrappedDeferredRegister<T> {


public "register"(arg0: $IEventBus$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedDeferredRegister$Type<T> = ($WrappedDeferredRegister<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedDeferredRegister_<T> = $WrappedDeferredRegister$Type<(T)>;
}}
declare module "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LivingUpgrade$IDamageProvider, $LivingUpgrade$IDamageProvider$Type} from "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade$IDamageProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LivingUpgrade$IAttributeProvider, $LivingUpgrade$IAttributeProvider$Type} from "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade$IAttributeProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingUpgrade$IArmorProvider, $LivingUpgrade$IArmorProvider$Type} from "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade$IArmorProvider"
import {$LivingUpgrade$Level, $LivingUpgrade$Level$Type} from "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade$Level"

export class $LivingUpgrade {
static readonly "DUMMY": $LivingUpgrade

constructor(arg0: $ResourceLocation$Type, arg1: $Consumer$Type<($List$Type<($LivingUpgrade$Level$Type)>)>)

public "toString"(): string
public "getKey"(): $ResourceLocation
public "isNegative"(): boolean
public "getLevel"(arg0: integer): integer
public "isCompatible"(arg0: $ResourceLocation$Type): boolean
public "getAttributeProvider"(): $LivingUpgrade$IAttributeProvider
public "getTranslationKey"(): string
public "withBonusSet"(arg0: string, arg1: $Consumer$Type<($List$Type<(number)>)>): $LivingUpgrade
public "getDamageProvider"(): $LivingUpgrade$IDamageProvider
public "addIncompatibility"(arg0: $ResourceLocation$Type, ...arg1: ($ResourceLocation$Type)[]): $LivingUpgrade
public "withDamageProvider"(arg0: $LivingUpgrade$IDamageProvider$Type): $LivingUpgrade
public "getArmorProvider"(): $LivingUpgrade$IArmorProvider
public "asDowngrade"(): $LivingUpgrade
public "withArmorProvider"(arg0: $LivingUpgrade$IArmorProvider$Type): $LivingUpgrade
public "withAttributeProvider"(arg0: $LivingUpgrade$IAttributeProvider$Type): $LivingUpgrade
public "getLevelExp"(arg0: integer): integer
public "getNextRequirement"(arg0: integer): integer
public "getLevelCost"(arg0: integer): integer
public "getBonusValue"(arg0: string, arg1: integer): number
get "key"(): $ResourceLocation
get "negative"(): boolean
get "attributeProvider"(): $LivingUpgrade$IAttributeProvider
get "translationKey"(): string
get "damageProvider"(): $LivingUpgrade$IDamageProvider
get "armorProvider"(): $LivingUpgrade$IArmorProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingUpgrade$Type = ($LivingUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingUpgrade_ = $LivingUpgrade$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$BloodAltarRecipeSerializer" {
import {$BloodAltarRecipeSerializer$IFactory, $BloodAltarRecipeSerializer$IFactory$Type} from "packages/wayoftime/bloodmagic/common/recipe/serializer/$BloodAltarRecipeSerializer$IFactory"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RecipeBloodAltar, $RecipeBloodAltar$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeBloodAltar"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BloodAltarRecipeSerializer<RECIPE extends $RecipeBloodAltar> implements $RecipeSerializer<(RECIPE)> {

constructor(arg0: $BloodAltarRecipeSerializer$IFactory$Type<(RECIPE)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): RECIPE
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): RECIPE
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: RECIPE): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): RECIPE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodAltarRecipeSerializer$Type<RECIPE> = ($BloodAltarRecipeSerializer<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloodAltarRecipeSerializer_<RECIPE> = $BloodAltarRecipeSerializer$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/core/data/$SoulNetwork" {
import {$BMWorldSavedData, $BMWorldSavedData$Type} from "packages/wayoftime/bloodmagic/core/data/$BMWorldSavedData"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$SoulTicket, $SoulTicket$Type} from "packages/wayoftime/bloodmagic/core/data/$SoulTicket"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$BooleanResult, $BooleanResult$Type} from "packages/wayoftime/bloodmagic/util/$BooleanResult"

export class $SoulNetwork implements $INBTSerializable<($CompoundTag)> {


/**
 * 
 * @deprecated
 */
public "add"(arg0: integer, arg1: integer): integer
public "add"(arg0: $SoulTicket$Type, arg1: integer): integer
public "clear"(): void
public "getParent"(): $BMWorldSavedData
public "setParent"(arg0: $BMWorldSavedData$Type): $SoulNetwork
public static "fromNBT"(arg0: $CompoundTag$Type): $SoulNetwork
public "getPlayer"(): $Player
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "setCurrentEssence"(arg0: integer): $SoulNetwork
/**
 * 
 * @deprecated
 */
public "addLifeEssence"(arg0: integer, arg1: integer): integer
public "getCachedPlayer"(): $Player
public "getTicketHistory"(): $List<($SoulTicket)>
public static "newEmpty"(arg0: $UUID$Type): $SoulNetwork
public "getOrbTier"(): integer
public "syphon"(arg0: $SoulTicket$Type, arg1: boolean): integer
public "syphon"(arg0: $SoulTicket$Type): integer
/**
 * 
 * @deprecated
 */
public "syphon"(arg0: integer): integer
public "getPlayerId"(): $UUID
public "syphonAndDamage"(arg0: $Player$Type, arg1: $SoulTicket$Type): $BooleanResult<(integer)>
/**
 * 
 * @deprecated
 */
public "syphonAndDamage"(arg0: $Player$Type, arg1: integer): boolean
public "setOrbTier"(arg0: integer): $SoulNetwork
public "hurtPlayer"(arg0: $Player$Type, arg1: float): void
public "getCurrentEssence"(): integer
/**
 * 
 * @deprecated
 */
public "causeNauseaToPlayer"(): void
public "causeNausea"(): void
get "parent"(): $BMWorldSavedData
set "parent"(value: $BMWorldSavedData$Type)
get "player"(): $Player
set "currentEssence"(value: integer)
get "cachedPlayer"(): $Player
get "ticketHistory"(): $List<($SoulTicket)>
get "orbTier"(): integer
get "playerId"(): $UUID
set "orbTier"(value: integer)
get "currentEssence"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulNetwork$Type = ($SoulNetwork);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulNetwork_ = $SoulNetwork$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockItemRoutingNode" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockRoutingNode, $BlockRoutingNode$Type} from "packages/wayoftime/bloodmagic/common/block/$BlockRoutingNode"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockItemRoutingNode extends $BlockRoutingNode implements $EntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
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

public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockItemRoutingNode$Type = ($BlockItemRoutingNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockItemRoutingNode_ = $BlockItemRoutingNode$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockSpikes" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BlockSpikes extends $Block {
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
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSpikes$Type = ($BlockSpikes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSpikes_ = $BlockSpikes$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$ARCPotionRecipeSerializer$IFactory" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RecipeARCPotion, $RecipeARCPotion$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeARCPotion"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidStackIngredient, $FluidStackIngredient$Type} from "packages/wayoftime/bloodmagic/recipe/helper/$FluidStackIngredient"

export interface $ARCPotionRecipeSerializer$IFactory<RECIPE extends $RecipeARCPotion> {

 "create"(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: integer, arg3: $Ingredient$Type, arg4: $FluidStackIngredient$Type, arg5: $ItemStack$Type, arg6: $List$Type<($Pair$Type<($ItemStack$Type), ($Pair$Type<(double), (double)>)>)>, arg7: $FluidStack$Type, arg8: boolean): RECIPE

(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: integer, arg3: $Ingredient$Type, arg4: $FluidStackIngredient$Type, arg5: $ItemStack$Type, arg6: $List$Type<($Pair$Type<($ItemStack$Type), ($Pair$Type<(double), (double)>)>)>, arg7: $FluidStack$Type, arg8: boolean): RECIPE
}

export namespace $ARCPotionRecipeSerializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ARCPotionRecipeSerializer$IFactory$Type<RECIPE> = ($ARCPotionRecipeSerializer$IFactory<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ARCPotionRecipeSerializer$IFactory_<RECIPE> = $ARCPotionRecipeSerializer$IFactory$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockSpectral" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SpectralBlockType, $SpectralBlockType$Type} from "packages/wayoftime/bloodmagic/common/block/type/$SpectralBlockType"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockSpectral extends $Block implements $EntityBlock {
static readonly "SPECTRAL_STATE": $EnumProperty<($SpectralBlockType)>
static readonly "DECAY_RATE": integer
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

public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $Random$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $Fluid$Type): boolean
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSpectral$Type = ($BlockSpectral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSpectral_ = $BlockSpectral$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockAltar" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockAltar extends $Block implements $EntityBlock {
 "isRedstoneActive": boolean
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

public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAltar$Type = ($BlockAltar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAltar_ = $BlockAltar$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/routing/$ItemRouterFilter" {
import {$IItemFilter, $IItemFilter$Type} from "packages/wayoftime/bloodmagic/common/routing/$IItemFilter"
import {$ContainerFilter, $ContainerFilter$Type} from "packages/wayoftime/bloodmagic/common/container/item/$ContainerFilter"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Button$OnPress, $Button$OnPress$Type} from "packages/net/minecraft/client/gui/components/$Button$OnPress"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IFilterKey, $IFilterKey$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$IFilterKey"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$IItemFilterProvider, $IItemFilterProvider$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$IItemFilterProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemRouterFilter extends $Item implements $MenuProvider, $IItemFilterProvider {
static readonly "inventorySize": integer
static readonly "maxUpgrades": integer
static readonly "FILTER_INV": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "getFilterKey"(arg0: $ItemStack$Type, arg1: integer, arg2: $ItemStack$Type, arg3: integer): $IFilterKey
public "getInputItemFilter"(arg0: $ItemStack$Type, arg1: $BlockEntity$Type, arg2: $IItemHandler$Type): $IItemFilter
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getDisplayName"(): $Component
public "setGhostItemAmount"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): void
public "receiveButtonPress"(arg0: $ItemStack$Type, arg1: string, arg2: integer, arg3: integer): integer
public "isButtonGlobal"(arg0: $ItemStack$Type, arg1: string): boolean
public "getButtonAction"(arg0: $ContainerFilter$Type): $List<($Pair<(string), ($Button$OnPress)>)>
public "getCurrentButtonState"(arg0: $ItemStack$Type, arg1: string, arg2: integer): integer
public "getUninitializedItemFilter"(arg0: $ItemStack$Type): $IItemFilter
public "getTexturePositionForState"(arg0: $ItemStack$Type, arg1: string, arg2: integer): $Pair<(integer), (integer)>
public "getTextForHoverItem"(arg0: $ItemStack$Type, arg1: string, arg2: integer): $List<($Component)>
public "getContainedStackForItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
public "getOutputItemFilter"(arg0: $ItemStack$Type, arg1: $BlockEntity$Type, arg2: $IItemHandler$Type): $IItemFilter
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRouterFilter$Type = ($ItemRouterFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRouterFilter_ = $ItemRouterFilter$Type;
}}
declare module "packages/wayoftime/bloodmagic/recipe/helper/$InputIngredient" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $InputIngredient<TYPE> extends $Predicate<(TYPE)> {

 "write"(arg0: $FriendlyByteBuf$Type): void
 "serialize"(): $JsonElement
 "getRepresentations"(): $List<(TYPE)>
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
declare module "packages/wayoftime/bloodmagic/common/routing/$IRoutingFilter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IRoutingFilter {

}

export namespace $IRoutingFilter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRoutingFilter$Type = ($IRoutingFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRoutingFilter_ = $IRoutingFilter$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$ARCPotionRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$RecipeARCPotion, $RecipeARCPotion$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeARCPotion"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ARCPotionRecipeSerializer$IFactory, $ARCPotionRecipeSerializer$IFactory$Type} from "packages/wayoftime/bloodmagic/common/recipe/serializer/$ARCPotionRecipeSerializer$IFactory"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ARCPotionRecipeSerializer<RECIPE extends $RecipeARCPotion> implements $RecipeSerializer<(RECIPE)> {

constructor(arg0: $ARCPotionRecipeSerializer$IFactory$Type<(RECIPE)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): RECIPE
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): RECIPE
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: RECIPE): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): RECIPE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ARCPotionRecipeSerializer$Type<RECIPE> = ($ARCPotionRecipeSerializer<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ARCPotionRecipeSerializer_<RECIPE> = $ARCPotionRecipeSerializer$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockBloodRune" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BloodRuneType, $BloodRuneType$Type} from "packages/wayoftime/bloodmagic/block/enums/$BloodRuneType"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IBloodRune, $IBloodRune$Type} from "packages/wayoftime/bloodmagic/altar/$IBloodRune"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockBloodRune extends $Block implements $IBloodRune {
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

constructor(arg0: $BloodRuneType$Type, arg1: integer)
constructor(arg0: $BloodRuneType$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getBloodRune"(arg0: $Level$Type, arg1: $BlockPos$Type): $BloodRuneType
public "getRuneCount"(arg0: $Level$Type, arg1: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBloodRune$Type = ($BlockBloodRune);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBloodRune_ = $BlockBloodRune$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ExpandedArmor" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ExpandedArmor {

 "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "damageArmor"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $DamageSource$Type, arg3: float, arg4: $EquipmentSlot$Type): void
}

export namespace $ExpandedArmor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExpandedArmor$Type = ($ExpandedArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExpandedArmor_ = $ExpandedArmor$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/routing/$IItemFilter" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IRoutingFilter, $IRoutingFilter$Type} from "packages/wayoftime/bloodmagic/common/routing/$IRoutingFilter"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFilterKey, $IFilterKey$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$IFilterKey"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $IItemFilter extends $IRoutingFilter {

 "initializeFilter"(arg0: $List$Type<($IFilterKey$Type)>, arg1: $BlockEntity$Type, arg2: $IItemHandler$Type, arg3: boolean): void
 "initializeFilter"(arg0: $List$Type<($IFilterKey$Type)>): void
 "doStacksMatch"(arg0: $IFilterKey$Type, arg1: $ItemStack$Type): boolean
 "getFilterList"(): $List<($IFilterKey)>
 "transferStackThroughOutputFilter"(arg0: $ItemStack$Type): $ItemStack
 "transferThroughInputFilter"(arg0: $IItemFilter$Type, arg1: integer): integer
 "doesStackPassFilter"(arg0: $ItemStack$Type): boolean
}

export namespace $IItemFilter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemFilter$Type = ($IItemFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemFilter_ = $IItemFilter$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$FilterMergeAlchemyTableRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$RecipeFilterMergeAlchemyTable, $RecipeFilterMergeAlchemyTable$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeFilterMergeAlchemyTable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FilterMergeAlchemyTableRecipeSerializer$IFactory, $FilterMergeAlchemyTableRecipeSerializer$IFactory$Type} from "packages/wayoftime/bloodmagic/common/recipe/serializer/$FilterMergeAlchemyTableRecipeSerializer$IFactory"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $FilterMergeAlchemyTableRecipeSerializer<RECIPE extends $RecipeFilterMergeAlchemyTable> implements $RecipeSerializer<(RECIPE)> {

constructor(arg0: $FilterMergeAlchemyTableRecipeSerializer$IFactory$Type<(RECIPE)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): RECIPE
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): RECIPE
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: RECIPE): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): RECIPE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterMergeAlchemyTableRecipeSerializer$Type<RECIPE> = ($FilterMergeAlchemyTableRecipeSerializer<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterMergeAlchemyTableRecipeSerializer_<RECIPE> = $FilterMergeAlchemyTableRecipeSerializer$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/meteor/$MeteorLayer" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$RandomBlockContainer, $RandomBlockContainer$Type} from "packages/wayoftime/bloodmagic/common/meteor/$RandomBlockContainer"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MeteorLayer {
 "layerRadius": integer
 "additionalTotalWeight": integer
 "minWeight": integer
 "totalMaxWeight": integer
 "weightList": $List<($Pair<($RandomBlockContainer), (integer)>)>
 "fillBlock": $RandomBlockContainer
 "shellBlock": $RandomBlockContainer

constructor(arg0: integer, arg1: integer, arg2: $TagKey$Type<($Block$Type)>, arg3: integer)
constructor(arg0: integer, arg1: integer, arg2: $TagKey$Type<($Block$Type)>)
constructor(arg0: integer, arg1: integer, arg2: $Fluid$Type)
constructor(arg0: integer, arg1: integer, arg2: $Block$Type)
constructor(arg0: integer, arg1: integer, arg2: $List$Type<($Pair$Type<($RandomBlockContainer$Type), (integer)>)>, arg3: $RandomBlockContainer$Type)

public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $MeteorLayer
public "buildLayer"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer): void
public "serialize"(): $JsonObject
public static "deserialize"(arg0: $JsonObject$Type): $MeteorLayer
public "recalculateMaxWeight"(arg0: $RandomSource$Type, arg1: $Level$Type): void
public "addShellBlock"(arg0: $RandomBlockContainer$Type): $MeteorLayer
public "addShellBlock"(arg0: $TagKey$Type<($Block$Type)>, arg1: integer): $MeteorLayer
public "addShellBlock"(arg0: $Block$Type): $MeteorLayer
public "addShellBlock"(arg0: $TagKey$Type<($Block$Type)>): $MeteorLayer
public "addShellBlock"(arg0: $Fluid$Type): $MeteorLayer
public "checkIfSphere"(arg0: float, arg1: float, arg2: float, arg3: float): boolean
public "getRandomState"(arg0: $RandomSource$Type, arg1: $Level$Type): $BlockState
public "addWeightedTag"(arg0: $TagKey$Type<($Block$Type)>, arg1: integer): $MeteorLayer
public "addWeightedTag"(arg0: $TagKey$Type<($Block$Type)>, arg1: integer, arg2: integer): $MeteorLayer
public "addWeightedBlock"(arg0: $Block$Type, arg1: integer): $MeteorLayer
public "setMinWeight"(arg0: integer): $MeteorLayer
public "checkIfSphereShell"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "addWeightedFluid"(arg0: $Fluid$Type, arg1: integer): $MeteorLayer
set "minWeight"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeteorLayer$Type = ($MeteorLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeteorLayer_ = $MeteorLayer$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/dungeon/$ItemDungeonKeyBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemBase, $ItemBase$Type} from "packages/wayoftime/bloodmagic/common/item/$ItemBase"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IDungeonKey, $IDungeonKey$Type} from "packages/wayoftime/bloodmagic/common/item/dungeon/$IDungeonKey"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDungeonKeyBase extends $ItemBase implements $IDungeonKey {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: string)

public "getValidResourceLocation"(arg0: $List$Type<($ResourceLocation$Type)>): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDungeonKeyBase$Type = ($ItemDungeonKeyBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDungeonKeyBase_ = $ItemDungeonKeyBase$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockDungeonController" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
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

export class $BlockDungeonController extends $Block implements $EntityBlock {
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

public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDungeonController$Type = ($BlockDungeonController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDungeonController_ = $BlockDungeonController$Type;
}}
declare module "packages/wayoftime/bloodmagic/ritual/$EnumRuneType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $EnumRuneType extends $Enum<($EnumRuneType)> implements $StringRepresentable {
static readonly "BLANK": $EnumRuneType
static readonly "WATER": $EnumRuneType
static readonly "FIRE": $EnumRuneType
static readonly "EARTH": $EnumRuneType
static readonly "AIR": $EnumRuneType
static readonly "DUSK": $EnumRuneType
static readonly "DAWN": $EnumRuneType
readonly "colorCode": $ChatFormatting
readonly "translationKey": string
readonly "patchouliColor": string


public "toString"(): string
public static "values"(): ($EnumRuneType)[]
public static "valueOf"(arg0: string): $EnumRuneType
public static "byMetadata"(arg0: integer): $EnumRuneType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumRuneType$Type = (("blank") | ("dusk") | ("earth") | ("fire") | ("dawn") | ("air") | ("water")) | ($EnumRuneType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumRuneType_ = $EnumRuneType$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ILivingUpgradePointsProvider" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ILivingUpgradePointsProvider {

 "getPriority"(arg0: $ItemStack$Type): integer
 "getAvailableUpgradePoints"(arg0: $ItemStack$Type, arg1: integer): integer
 "getExcessUpgradePoints"(arg0: $ItemStack$Type, arg1: integer): integer
 "getTotalUpgradePoints"(arg0: $ItemStack$Type): integer
 "getResultingStack"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
 "canSyphonPoints"(arg0: $ItemStack$Type, arg1: integer): boolean
}

export namespace $ILivingUpgradePointsProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILivingUpgradePointsProvider$Type = ($ILivingUpgradePointsProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILivingUpgradePointsProvider_ = $ILivingUpgradePointsProvider$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/tile/base/$TileBase" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TileBase extends $BlockEntity {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "notifyUpdate"(): void
public "serialize"(arg0: $CompoundTag$Type): $CompoundTag
public "deserialize"(arg0: $CompoundTag$Type): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "updateTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileBase$Type = ($TileBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileBase_ = $TileBase$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/type/$SpecialSealType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $SpecialSealType extends $Enum<($SpecialSealType)> implements $StringRepresentable {
static readonly "STANDARD": $SpecialSealType
static readonly "MINE_ENTRANCE": $SpecialSealType
static readonly "MINE_KEY": $SpecialSealType


public "toString"(): string
public static "values"(): ($SpecialSealType)[]
public static "valueOf"(arg0: string): $SpecialSealType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialSealType$Type = (("standard") | ("mine_entrance") | ("mine_key")) | ($SpecialSealType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpecialSealType_ = $SpecialSealType$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionCycleRecipeSerializer$IFactory" {
import {$RecipePotionCycle, $RecipePotionCycle$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionCycle"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $PotionCycleRecipeSerializer$IFactory<RECIPE extends $RecipePotionCycle> {

 "create"(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: integer, arg3: integer, arg4: integer, arg5: integer): RECIPE

(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: integer, arg3: integer, arg4: integer, arg5: integer): RECIPE
}

export namespace $PotionCycleRecipeSerializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionCycleRecipeSerializer$IFactory$Type<RECIPE> = ($PotionCycleRecipeSerializer$IFactory<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionCycleRecipeSerializer$IFactory_<RECIPE> = $PotionCycleRecipeSerializer$IFactory$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockInversionPillarEnd" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$PillarCapType, $PillarCapType$Type} from "packages/wayoftime/bloodmagic/common/block/type/$PillarCapType"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $BlockInversionPillarEnd extends $Block {
static readonly "TYPE": $EnumProperty<($PillarCapType)>
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockInversionPillarEnd$Type = ($BlockInversionPillarEnd);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockInversionPillarEnd_ = $BlockInversionPillarEnd$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/$BloodMagicRecipeType" {
import {$RecipeLivingDowngrade, $RecipeLivingDowngrade$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeLivingDowngrade"
import {$BloodMagicRecipe, $BloodMagicRecipe$Type} from "packages/wayoftime/bloodmagic/recipe/$BloodMagicRecipe"
import {$RecipeTypeDeferredRegister, $RecipeTypeDeferredRegister$Type} from "packages/wayoftime/bloodmagic/common/registration/impl/$RecipeTypeDeferredRegister"
import {$RecipeAlchemyArray, $RecipeAlchemyArray$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeAlchemyArray"
import {$RecipeTartaricForge, $RecipeTartaricForge$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeTartaricForge"
import {$RecipeARC, $RecipeARC$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeARC"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RecipeBloodAltar, $RecipeBloodAltar$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeBloodAltar"
import {$RecipeAlchemyTable, $RecipeAlchemyTable$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeAlchemyTable"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RecipeMeteor, $RecipeMeteor$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeMeteor"
import {$RecipeTypeRegistryObject, $RecipeTypeRegistryObject$Type} from "packages/wayoftime/bloodmagic/common/registration/impl/$RecipeTypeRegistryObject"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$RecipePotionFlaskBase, $RecipePotionFlaskBase$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionFlaskBase"

export class $BloodMagicRecipeType<RECIPE extends $BloodMagicRecipe> implements $RecipeType<(RECIPE)> {
static readonly "RECIPE_TYPES": $RecipeTypeDeferredRegister
static readonly "ALTAR": $RecipeTypeRegistryObject<($RecipeBloodAltar)>
static readonly "ARRAY": $RecipeTypeRegistryObject<($RecipeAlchemyArray)>
static readonly "TARTARICFORGE": $RecipeTypeRegistryObject<($RecipeTartaricForge)>
static readonly "ARC": $RecipeTypeRegistryObject<($RecipeARC)>
static readonly "ALCHEMYTABLE": $RecipeTypeRegistryObject<($RecipeAlchemyTable)>
static readonly "LIVINGDOWNGRADE": $RecipeTypeRegistryObject<($RecipeLivingDowngrade)>
static readonly "POTIONFLASK": $RecipeTypeRegistryObject<($RecipePotionFlaskBase)>
static readonly "METEOR": $RecipeTypeRegistryObject<($RecipeMeteor)>


public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$Type): $RecipeType<(RECIPE)>
public static "register"<T extends $Recipe<(any)>>(arg0: string): $RecipeType<(RECIPE)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodMagicRecipeType$Type<RECIPE> = ($BloodMagicRecipeType<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloodMagicRecipeType_<RECIPE> = $BloodMagicRecipeType$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilTeleposition" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemSigilBase, $ItemSigilBase$Type} from "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilBase"
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
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSigilTeleposition extends $ItemSigilBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "setWorld"(arg0: $ItemStack$Type, arg1: $Level$Type): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getStoredKey"(arg0: $ItemStack$Type, arg1: $Level$Type): $ResourceKey<($Level)>
public "getStoredWorld"(arg0: $ItemStack$Type, arg1: $Level$Type): $Level
public "getStoredPos"(arg0: $ItemStack$Type): $BlockPos
public "setStoredPos"(arg0: $ItemStack$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSigilTeleposition$Type = ($ItemSigilTeleposition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSigilTeleposition_ = $ItemSigilTeleposition$Type;
}}
declare module "packages/wayoftime/bloodmagic/client/key/$KeyBindings" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IKeyConflictContext, $IKeyConflictContext$Type} from "packages/net/minecraftforge/client/settings/$IKeyConflictContext"
import {$KeyModifier, $KeyModifier$Type} from "packages/net/minecraftforge/client/settings/$KeyModifier"

export class $KeyBindings extends $Enum<($KeyBindings)> {
static readonly "OPEN_HOLDING": $KeyBindings
static readonly "CYCLE_HOLDING_POS": $KeyBindings
static readonly "CYCLE_HOLDING_NEG": $KeyBindings


public "getDescription"(): string
public "setKey"(arg0: $KeyMapping$Type): void
public static "values"(): ($KeyBindings)[]
public static "valueOf"(arg0: string): $KeyBindings
public "getKey"(): $KeyMapping
public "getKeyModifier"(): $KeyModifier
public "getKeyCode"(): integer
public "getKeyConflictContext"(): $IKeyConflictContext
public "toKeyMapping"(): $KeyMapping
public "handleKeybind"(): void
get "description"(): string
set "key"(value: $KeyMapping$Type)
get "key"(): $KeyMapping
get "keyModifier"(): $KeyModifier
get "keyCode"(): integer
get "keyConflictContext"(): $IKeyConflictContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyBindings$Type = (("cycle_holding_pos") | ("open_holding") | ("cycle_holding_neg")) | ($KeyBindings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyBindings_ = $KeyBindings$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/tile/base/$TileTicking" {
import {$TileBase, $TileBase$Type} from "packages/wayoftime/bloodmagic/common/tile/base/$TileBase"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TileTicking extends $TileBase {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "tick"(): void
public "getTicksExisted"(): integer
public "resetLifetime"(): void
public "setShouldTick"(arg0: boolean): void
public "shouldTick"(): boolean
public "onUpdate"(): void
get "ticksExisted"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileTicking$Type = ($TileTicking);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileTicking_ = $TileTicking$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$LivingDowngradeRecipeSerializer$IFactory" {
import {$RecipeLivingDowngrade, $RecipeLivingDowngrade$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeLivingDowngrade"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $LivingDowngradeRecipeSerializer$IFactory<RECIPE extends $RecipeLivingDowngrade> {

 "create"(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ResourceLocation$Type): RECIPE

(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ResourceLocation$Type): RECIPE
}

export namespace $LivingDowngradeRecipeSerializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDowngradeRecipeSerializer$IFactory$Type<RECIPE> = ($LivingDowngradeRecipeSerializer$IFactory<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingDowngradeRecipeSerializer$IFactory_<RECIPE> = $LivingDowngradeRecipeSerializer$IFactory$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionCycleRecipeSerializer" {
import {$RecipePotionCycle, $RecipePotionCycle$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionCycle"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$PotionCycleRecipeSerializer$IFactory, $PotionCycleRecipeSerializer$IFactory$Type} from "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionCycleRecipeSerializer$IFactory"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $PotionCycleRecipeSerializer<RECIPE extends $RecipePotionCycle> implements $RecipeSerializer<(RECIPE)> {

constructor(arg0: $PotionCycleRecipeSerializer$IFactory$Type<(RECIPE)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): RECIPE
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): RECIPE
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: RECIPE): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): RECIPE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionCycleRecipeSerializer$Type<RECIPE> = ($PotionCycleRecipeSerializer<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionCycleRecipeSerializer_<RECIPE> = $PotionCycleRecipeSerializer$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemTeleposerFocus" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemBindableBase, $ItemBindableBase$Type} from "packages/wayoftime/bloodmagic/common/item/$ItemBindableBase"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ITeleposerFocus, $ITeleposerFocus$Type} from "packages/wayoftime/bloodmagic/common/item/$ITeleposerFocus"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemTeleposerFocus extends $ItemBindableBase implements $ITeleposerFocus {
readonly "range": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: integer)

public "setWorld"(arg0: $ItemStack$Type, arg1: $Level$Type): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getEntityRangeOffset"(arg0: $Level$Type, arg1: $BlockPos$Type): $AABB
public "getBlockListOffset"(arg0: $Level$Type): $List<($BlockPos)>
public "getStoredKey"(arg0: $ItemStack$Type, arg1: $Level$Type): $ResourceKey<($Level)>
public "getStoredWorld"(arg0: $ItemStack$Type, arg1: $Level$Type): $Level
public "getStoredPos"(arg0: $ItemStack$Type): $BlockPos
public "setStoredPos"(arg0: $ItemStack$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTeleposerFocus$Type = ($ItemTeleposerFocus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTeleposerFocus_ = $ItemTeleposerFocus$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/routing/$ItemCompositeFilter" {
import {$IItemFilter, $IItemFilter$Type} from "packages/wayoftime/bloodmagic/common/routing/$IItemFilter"
import {$ContainerFilter, $ContainerFilter$Type} from "packages/wayoftime/bloodmagic/common/container/item/$ContainerFilter"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICompositeItemFilterProvider, $ICompositeItemFilterProvider$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$ICompositeItemFilterProvider"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Button$OnPress, $Button$OnPress$Type} from "packages/net/minecraft/client/gui/components/$Button$OnPress"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemRouterFilter, $ItemRouterFilter$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$ItemRouterFilter"
import {$IFilterKey, $IFilterKey$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$IFilterKey"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemCompositeFilter extends $ItemRouterFilter implements $MenuProvider, $ICompositeItemFilterProvider {
static readonly "inventorySize": integer
static readonly "maxUpgrades": integer
static readonly "FILTER_INV": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getFilterKey"(arg0: $ItemStack$Type, arg1: integer, arg2: $ItemStack$Type, arg3: integer): $IFilterKey
public "getInputItemFilter"(arg0: $ItemStack$Type, arg1: $BlockEntity$Type, arg2: $IItemHandler$Type): $IItemFilter
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getNestedFilters"(arg0: $ItemStack$Type): $List<($ItemStack)>
public "receiveButtonPress"(arg0: $ItemStack$Type, arg1: string, arg2: integer, arg3: integer): integer
public "isButtonGlobal"(arg0: $ItemStack$Type, arg1: string): boolean
public "getButtonAction"(arg0: $ContainerFilter$Type): $List<($Pair<(string), ($Button$OnPress)>)>
public "nestFilter"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
public "getCurrentButtonState"(arg0: $ItemStack$Type, arg1: string, arg2: integer): integer
public "getTexturePositionForState"(arg0: $ItemStack$Type, arg1: string, arg2: integer): $Pair<(integer), (integer)>
public "getTextForHoverItem"(arg0: $ItemStack$Type, arg1: string, arg2: integer): $List<($Component)>
public "getOutputItemFilter"(arg0: $ItemStack$Type, arg1: $BlockEntity$Type, arg2: $IItemHandler$Type): $IItemFilter
public "canReceiveNestedFilter"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getDisplayName"(): $Component
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCompositeFilter$Type = ($ItemCompositeFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCompositeFilter_ = $ItemCompositeFilter$Type;
}}
declare module "packages/wayoftime/bloodmagic/potion/$PotionSacrificialLamb" {
import {$PotionBloodMagic, $PotionBloodMagic$Type} from "packages/wayoftime/bloodmagic/potion/$PotionBloodMagic"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $PotionSacrificialLamb extends $PotionBloodMagic {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionSacrificialLamb$Type = ($PotionSacrificialLamb);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionSacrificialLamb_ = $PotionSacrificialLamb$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemDemonCrystal" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IDiscreteDemonWill, $IDiscreteDemonWill$Type} from "packages/wayoftime/bloodmagic/api/compat/$IDiscreteDemonWill"
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDemonCrystal extends $Item implements $IDiscreteDemonWill {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $EnumDemonWillType$Type)

public "getType"(arg0: $ItemStack$Type): $EnumDemonWillType
public "getWill"(arg0: $ItemStack$Type): double
public "getDiscretization"(arg0: $ItemStack$Type): double
public "drainWill"(arg0: $ItemStack$Type, arg1: double): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDemonCrystal$Type = ($ItemDemonCrystal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDemonCrystal_ = $ItemDemonCrystal$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemLivingTomeScrap" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ILivingUpgradePointsProvider, $ILivingUpgradePointsProvider$Type} from "packages/wayoftime/bloodmagic/common/item/$ILivingUpgradePointsProvider"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemLivingTomeScrap extends $Item implements $ILivingUpgradePointsProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getPriority"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getAvailableUpgradePoints"(arg0: $ItemStack$Type, arg1: integer): integer
public "getExcessUpgradePoints"(arg0: $ItemStack$Type, arg1: integer): integer
public "getTotalUpgradePoints"(arg0: $ItemStack$Type): integer
public "setTotalUpgradePoints"(arg0: $ItemStack$Type, arg1: integer): void
public "getResultingStack"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
public "canSyphonPoints"(arg0: $ItemStack$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLivingTomeScrap$Type = ($ItemLivingTomeScrap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLivingTomeScrap_ = $ItemLivingTomeScrap$Type;
}}
declare module "packages/wayoftime/bloodmagic/api/compat/$IAltarReader" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAltarReader {

}

export namespace $IAltarReader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAltarReader$Type = ($IAltarReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAltarReader_ = $IAltarReader$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/routing/$ItemTagFilter" {
import {$ContainerFilter, $ContainerFilter$Type} from "packages/wayoftime/bloodmagic/common/container/item/$ContainerFilter"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Button$OnPress, $Button$OnPress$Type} from "packages/net/minecraft/client/gui/components/$Button$OnPress"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemRouterFilter, $ItemRouterFilter$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$ItemRouterFilter"
import {$IFilterKey, $IFilterKey$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$IFilterKey"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INestableItemFilterProvider, $INestableItemFilterProvider$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$INestableItemFilterProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemTagFilter extends $ItemRouterFilter implements $INestableItemFilterProvider {
static readonly "inventorySize": integer
static readonly "maxUpgrades": integer
static readonly "FILTER_INV": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getItemTag"(arg0: $ItemStack$Type, arg1: integer): $TagKey<($Item)>
public "getFilterKey"(arg0: $ItemStack$Type, arg1: integer, arg2: $ItemStack$Type, arg3: integer): $IFilterKey
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "receiveButtonPress"(arg0: $ItemStack$Type, arg1: string, arg2: integer, arg3: integer): integer
public "getButtonAction"(arg0: $ContainerFilter$Type): $List<($Pair<(string), ($Button$OnPress)>)>
public "getItemTagIndex"(arg0: $ItemStack$Type, arg1: integer): integer
public "getItemTagResource"(arg0: $ItemStack$Type, arg1: integer): $ResourceLocation
public "getAllItemTags"(arg0: $ItemStack$Type): $List<($TagKey<($Item)>)>
public "getAllItemTags"(arg0: $ItemStack$Type, arg1: integer): $List<($TagKey<($Item)>)>
public "setItemTag"(arg0: $ItemStack$Type, arg1: integer, arg2: $TagKey$Type<($Item$Type)>): void
public "setItemTagIndex"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): void
public "cycleToNextTag"(arg0: $ItemStack$Type, arg1: integer): void
public "getCurrentButtonState"(arg0: $ItemStack$Type, arg1: string, arg2: integer): integer
public "getTexturePositionForState"(arg0: $ItemStack$Type, arg1: string, arg2: integer): $Pair<(integer), (integer)>
public "getTextForHoverItem"(arg0: $ItemStack$Type, arg1: string, arg2: integer): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTagFilter$Type = ($ItemTagFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTagFilter_ = $ItemTagFilter$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/routing/$IRouterUpgrade" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IRouterUpgrade {

 "getMaxTransferIncrease"(arg0: $ItemStack$Type): integer

(arg0: $ItemStack$Type): integer
}

export namespace $IRouterUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRouterUpgrade$Type = ($IRouterUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRouterUpgrade_ = $IRouterUpgrade$Type;
}}
declare module "packages/wayoftime/bloodmagic/structures/$ItemDungeonTester" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDungeonTester extends $Item {
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
export type $ItemDungeonTester$Type = ($ItemDungeonTester);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDungeonTester_ = $ItemDungeonTester$Type;
}}
declare module "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumDemonWillType extends $Enum<($EnumDemonWillType)> implements $StringRepresentable {
static readonly "DEFAULT": $EnumDemonWillType
static readonly "CORROSIVE": $EnumDemonWillType
static readonly "DESTRUCTIVE": $EnumDemonWillType
static readonly "VENGEFUL": $EnumDemonWillType
static readonly "STEADFAST": $EnumDemonWillType
readonly "name": string


public "toString"(): string
public static "values"(): ($EnumDemonWillType)[]
public static "valueOf"(arg0: string): $EnumDemonWillType
public static "getType"(arg0: string): $EnumDemonWillType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumDemonWillType$Type = (("vengeful") | ("steadfast") | ("default") | ("corrosive") | ("destructive")) | ($EnumDemonWillType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumDemonWillType_ = $EnumDemonWillType$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/sigil/$ISigil$Holding" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ISigil$Holding {

 "getHeldItem"(arg0: $ItemStack$Type, arg1: $Player$Type): $ItemStack

(arg0: $ItemStack$Type, arg1: $Player$Type): $ItemStack
}

export namespace $ISigil$Holding {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISigil$Holding$Type = ($ISigil$Holding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISigil$Holding_ = $ISigil$Holding$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockAlternator" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockAlternator extends $Block implements $EntityBlock {
static readonly "ACTIVE": $BooleanProperty
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

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAlternator$Type = ($BlockAlternator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAlternator_ = $BlockAlternator$Type;
}}
declare module "packages/wayoftime/bloodmagic/ritual/$AreaDescriptor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$StructurePlaceSettings, $StructurePlaceSettings$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructurePlaceSettings"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $AreaDescriptor implements $Iterator<($BlockPos)> {

constructor()

public "copy"(): $AreaDescriptor
public "offset"(arg0: $BlockPos$Type): $AreaDescriptor
public "intersects"(arg0: $AreaDescriptor$Type): boolean
public "isWithinRange"(arg0: integer, arg1: integer): boolean
public "isWithinRange"(arg0: $BlockPos$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer): boolean
public "getHeight"(): integer
public "getContainedPositions"(arg0: $BlockPos$Type): $List<($BlockPos)>
public "getVolumeForOffsets"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): integer
public "modifyAreaByBlockPositions"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): void
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "getVolume"(): integer
public "resetCache"(): void
public "rotateDescriptor"(arg0: $StructurePlaceSettings$Type): $AreaDescriptor
public "isWithinArea"(arg0: $BlockPos$Type): boolean
public "resetIterator"(): void
public "getAABB"(arg0: $BlockPos$Type): $AABB
public "remove"(): void
public "forEachRemaining"(arg0: $Consumer$Type<(any)>): void
public "hasNext"(): boolean
public "next"(): $BlockPos
get "height"(): integer
get "volume"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AreaDescriptor$Type = ($AreaDescriptor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AreaDescriptor_ = $AreaDescriptor$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilWater" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IAlchemyItem, $IAlchemyItem$Type} from "packages/wayoftime/bloodmagic/common/item/$IAlchemyItem"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemSigilFluidBase, $ItemSigilFluidBase$Type} from "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilFluidBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSigilWater extends $ItemSigilFluidBase implements $IAlchemyItem {
readonly "sigilFluid": $FluidStack
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isStackChangedOnUse"(arg0: $ItemStack$Type): boolean
public "onConsumeInput"(arg0: $ItemStack$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSigilWater$Type = ($ItemSigilWater);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSigilWater_ = $ItemSigilWater$Type;
}}
declare module "packages/wayoftime/bloodmagic/altar/$IBloodRune" {
import {$BloodRuneType, $BloodRuneType$Type} from "packages/wayoftime/bloodmagic/block/enums/$BloodRuneType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IBloodRune {

 "getBloodRune"(arg0: $Level$Type, arg1: $BlockPos$Type): $BloodRuneType
 "getRuneCount"(arg0: $Level$Type, arg1: $BlockPos$Type): integer

(arg0: $Level$Type, arg1: $BlockPos$Type): $BloodRuneType
}

export namespace $IBloodRune {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBloodRune$Type = ($IBloodRune);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBloodRune_ = $IBloodRune$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilDivination" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$IAltarReader, $IAltarReader$Type} from "packages/wayoftime/bloodmagic/api/compat/$IAltarReader"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemSigilBase, $ItemSigilBase$Type} from "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSigilDivination extends $ItemSigilBase implements $IAltarReader {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: boolean)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "openEditHUDScreen"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSigilDivination$Type = ($ItemSigilDivination);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSigilDivination_ = $ItemSigilDivination$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionTransformRecipeSerializer" {
import {$PotionTransformRecipeSerializer$IFactory, $PotionTransformRecipeSerializer$IFactory$Type} from "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionTransformRecipeSerializer$IFactory"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipePotionTransform, $RecipePotionTransform$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionTransform"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $PotionTransformRecipeSerializer<RECIPE extends $RecipePotionTransform> implements $RecipeSerializer<(RECIPE)> {

constructor(arg0: $PotionTransformRecipeSerializer$IFactory$Type<(RECIPE)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): RECIPE
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): RECIPE
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: RECIPE): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): RECIPE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionTransformRecipeSerializer$Type<RECIPE> = ($PotionTransformRecipeSerializer<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionTransformRecipeSerializer_<RECIPE> = $PotionTransformRecipeSerializer$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilVoid" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemSigilFluidBase, $ItemSigilFluidBase$Type} from "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilFluidBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSigilVoid extends $ItemSigilFluidBase {
readonly "sigilFluid": $FluidStack
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
export type $ItemSigilVoid$Type = ($ItemSigilVoid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSigilVoid_ = $ItemSigilVoid$Type;
}}
declare module "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionIncreaseLength" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$EffectHolder, $EffectHolder$Type} from "packages/wayoftime/bloodmagic/recipe/$EffectHolder"
import {$RecipePotionFlaskBase, $RecipePotionFlaskBase$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionFlaskBase"

export class $RecipePotionIncreaseLength extends $RecipePotionFlaskBase {
 "outputEffect": $MobEffect
 "lengthDurationMod": double
static readonly "MAX_INPUTS": integer

constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $MobEffect$Type, arg3: double, arg4: integer, arg5: integer, arg6: integer)

public "write"(arg0: $FriendlyByteBuf$Type): void
public "getPriority"(arg0: $List$Type<($EffectHolder$Type)>): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "getOutput"(arg0: $ItemStack$Type, arg1: $List$Type<($EffectHolder$Type)>): $ItemStack
public "getExampleEffectList"(): $List<($EffectHolder)>
public "canModifyFlask"(arg0: $ItemStack$Type, arg1: $List$Type<($EffectHolder$Type)>): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "exampleEffectList"(): $List<($EffectHolder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipePotionIncreaseLength$Type = ($RecipePotionIncreaseLength);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipePotionIncreaseLength_ = $RecipePotionIncreaseLength$Type;
}}
declare module "packages/wayoftime/bloodmagic/potion/$PotionSoulSnare" {
import {$PotionBloodMagic, $PotionBloodMagic$Type} from "packages/wayoftime/bloodmagic/potion/$PotionBloodMagic"

export class $PotionSoulSnare extends $PotionBloodMagic {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionSoulSnare$Type = ($PotionSoulSnare);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionSoulSnare_ = $PotionSoulSnare$Type;
}}
declare module "packages/wayoftime/bloodmagic/recipe/$RecipeFilterMergeAlchemyTable" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RecipeAlchemyTable, $RecipeAlchemyTable$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeAlchemyTable"

export class $RecipeFilterMergeAlchemyTable extends $RecipeAlchemyTable {
static readonly "MAX_INPUTS": integer

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $List$Type<($Ingredient$Type)>, arg3: $ItemStack$Type, arg4: integer, arg5: integer, arg6: integer)

public "getInput"(): $List<($Ingredient)>
public "write"(arg0: $FriendlyByteBuf$Type): void
public "getSerializer"(): $RecipeSerializer<($RecipeFilterMergeAlchemyTable)>
public "getOutput"(arg0: $List$Type<($ItemStack$Type)>): $ItemStack
get "input"(): $List<($Ingredient)>
get "serializer"(): $RecipeSerializer<($RecipeFilterMergeAlchemyTable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeFilterMergeAlchemyTable$Type = ($RecipeFilterMergeAlchemyTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeFilterMergeAlchemyTable_ = $RecipeFilterMergeAlchemyTable$Type;
}}
declare module "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionEffect" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$EffectHolder, $EffectHolder$Type} from "packages/wayoftime/bloodmagic/recipe/$EffectHolder"
import {$RecipePotionFlaskBase, $RecipePotionFlaskBase$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionFlaskBase"

export class $RecipePotionEffect extends $RecipePotionFlaskBase {
 "outputEffect": $MobEffect
 "baseDuration": integer
static readonly "MAX_INPUTS": integer

constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $MobEffect$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer)

public "write"(arg0: $FriendlyByteBuf$Type): void
public "getPriority"(arg0: $List$Type<($EffectHolder$Type)>): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "getOutput"(arg0: $ItemStack$Type, arg1: $List$Type<($EffectHolder$Type)>): $ItemStack
public "getExampleEffectList"(): $List<($EffectHolder)>
public "canModifyFlask"(arg0: $ItemStack$Type, arg1: $List$Type<($EffectHolder$Type)>): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "exampleEffectList"(): $List<($EffectHolder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipePotionEffect$Type = ($RecipePotionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipePotionEffect_ = $RecipePotionEffect$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$LivingDowngradeRecipeSerializer" {
import {$LivingDowngradeRecipeSerializer$IFactory, $LivingDowngradeRecipeSerializer$IFactory$Type} from "packages/wayoftime/bloodmagic/common/recipe/serializer/$LivingDowngradeRecipeSerializer$IFactory"
import {$RecipeLivingDowngrade, $RecipeLivingDowngrade$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeLivingDowngrade"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $LivingDowngradeRecipeSerializer<RECIPE extends $RecipeLivingDowngrade> implements $RecipeSerializer<(RECIPE)> {

constructor(arg0: $LivingDowngradeRecipeSerializer$IFactory$Type<(RECIPE)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): RECIPE
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): RECIPE
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: RECIPE): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): RECIPE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDowngradeRecipeSerializer$Type<RECIPE> = ($LivingDowngradeRecipeSerializer<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingDowngradeRecipeSerializer_<RECIPE> = $LivingDowngradeRecipeSerializer$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionIncreaseLengthRecipeSerializer$IFactory" {
import {$RecipePotionIncreaseLength, $RecipePotionIncreaseLength$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionIncreaseLength"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export interface $PotionIncreaseLengthRecipeSerializer$IFactory<RECIPE extends $RecipePotionIncreaseLength> {

 "create"(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $MobEffect$Type, arg3: double, arg4: integer, arg5: integer, arg6: integer): RECIPE

(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $MobEffect$Type, arg3: double, arg4: integer, arg5: integer, arg6: integer): RECIPE
}

export namespace $PotionIncreaseLengthRecipeSerializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionIncreaseLengthRecipeSerializer$IFactory$Type<RECIPE> = ($PotionIncreaseLengthRecipeSerializer$IFactory<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionIncreaseLengthRecipeSerializer$IFactory_<RECIPE> = $PotionIncreaseLengthRecipeSerializer$IFactory$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilGreenGrove" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemSigilToggleableBase, $ItemSigilToggleableBase$Type} from "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilToggleableBase"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSigilGreenGrove extends $ItemSigilToggleableBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "onSigilUpdate"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: integer, arg4: boolean): void
public "onSigilUse"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $Direction$Type, arg5: $Vec3$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSigilGreenGrove$Type = ($ItemSigilGreenGrove);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSigilGreenGrove_ = $ItemSigilGreenGrove$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionIncreaseLengthRecipeSerializer" {
import {$PotionIncreaseLengthRecipeSerializer$IFactory, $PotionIncreaseLengthRecipeSerializer$IFactory$Type} from "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionIncreaseLengthRecipeSerializer$IFactory"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipePotionIncreaseLength, $RecipePotionIncreaseLength$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionIncreaseLength"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $PotionIncreaseLengthRecipeSerializer<RECIPE extends $RecipePotionIncreaseLength> implements $RecipeSerializer<(RECIPE)> {

constructor(arg0: $PotionIncreaseLengthRecipeSerializer$IFactory$Type<(RECIPE)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): RECIPE
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): RECIPE
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: RECIPE): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): RECIPE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionIncreaseLengthRecipeSerializer$Type<RECIPE> = ($PotionIncreaseLengthRecipeSerializer<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionIncreaseLengthRecipeSerializer_<RECIPE> = $PotionIncreaseLengthRecipeSerializer$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$TartaricForgeRecipeSerializer$IFactory" {
import {$RecipeTartaricForge, $RecipeTartaricForge$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeTartaricForge"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $TartaricForgeRecipeSerializer$IFactory<RECIPE extends $RecipeTartaricForge> {

 "create"(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: double, arg4: double): RECIPE

(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: double, arg4: double): RECIPE
}

export namespace $TartaricForgeRecipeSerializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TartaricForgeRecipeSerializer$IFactory$Type<RECIPE> = ($TartaricForgeRecipeSerializer$IFactory<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TartaricForgeRecipeSerializer$IFactory_<RECIPE> = $TartaricForgeRecipeSerializer$IFactory$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade$IArmorProvider" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LivingUpgrade, $LivingUpgrade$Type} from "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade"
import {$LivingStats, $LivingStats$Type} from "packages/wayoftime/bloodmagic/core/living/$LivingStats"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"

export interface $LivingUpgrade$IArmorProvider {

 "getProtection"(arg0: $Player$Type, arg1: $LivingStats$Type, arg2: $DamageSource$Type, arg3: $LivingUpgrade$Type, arg4: integer): double

(arg0: $Player$Type, arg1: $LivingStats$Type, arg2: $DamageSource$Type, arg3: $LivingUpgrade$Type, arg4: integer): double
}

export namespace $LivingUpgrade$IArmorProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingUpgrade$IArmorProvider$Type = ($LivingUpgrade$IArmorProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingUpgrade$IArmorProvider_ = $LivingUpgrade$IArmorProvider$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockDemonPylon" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockDemonPylon extends $Block implements $EntityBlock {
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
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDemonPylon$Type = ($BlockDemonPylon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDemonPylon_ = $BlockDemonPylon$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilSuppression" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemSigilToggleableBase, $ItemSigilToggleableBase$Type} from "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilToggleableBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSigilSuppression extends $ItemSigilToggleableBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "onSigilUpdate"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: integer, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSigilSuppression$Type = ($ItemSigilSuppression);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSigilSuppression_ = $ItemSigilSuppression$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemThrowingDaggerSyringe" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemThrowingDagger, $ItemThrowingDagger$Type} from "packages/wayoftime/bloodmagic/common/item/$ItemThrowingDagger"
import {$AbstractEntityThrowingDagger, $AbstractEntityThrowingDagger$Type} from "packages/wayoftime/bloodmagic/entity/projectile/$AbstractEntityThrowingDagger"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemThrowingDaggerSyringe extends $ItemThrowingDagger {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getDagger"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): $AbstractEntityThrowingDagger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemThrowingDaggerSyringe$Type = ($ItemThrowingDaggerSyringe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemThrowingDaggerSyringe_ = $ItemThrowingDaggerSyringe$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockTeleposer" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockTeleposer extends $Block implements $EntityBlock {
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

public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTeleposer$Type = ($BlockTeleposer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTeleposer_ = $BlockTeleposer$Type;
}}
declare module "packages/wayoftime/bloodmagic/recipe/$EffectHolder" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $EffectHolder {

constructor(arg0: $MobEffect$Type, arg1: integer, arg2: integer, arg3: double, arg4: double)

public "write"(arg0: $CompoundTag$Type): $CompoundTag
public static "read"(arg0: $CompoundTag$Type): $EffectHolder
public "getEffectInstance"(arg0: double, arg1: boolean, arg2: boolean): $MobEffectInstance
public "getEffectInstance"(arg0: boolean, arg1: boolean): $MobEffectInstance
public "setLengthDurationMod"(arg0: double): void
public "getLengthDurationMod"(): double
public "getPotion"(): $MobEffect
public "getAmpDurationMod"(): double
public "setAmplifier"(arg0: integer): void
public "setAmpDurationMod"(arg0: double): void
public "getAmplifier"(): integer
public "setBaseDuration"(arg0: integer): void
public "getBaseDuration"(): integer
set "lengthDurationMod"(value: double)
get "lengthDurationMod"(): double
get "potion"(): $MobEffect
get "ampDurationMod"(): double
set "amplifier"(value: integer)
set "ampDurationMod"(value: double)
get "amplifier"(): integer
set "baseDuration"(value: integer)
get "baseDuration"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectHolder$Type = ($EffectHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectHolder_ = $EffectHolder$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemArcaneAshes" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemArcaneAshes extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemArcaneAshes$Type = ($ItemArcaneAshes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemArcaneAshes_ = $ItemArcaneAshes$Type;
}}
declare module "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade$IAttributeProvider" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$LivingUpgrade, $LivingUpgrade$Type} from "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade"
import {$LivingStats, $LivingStats$Type} from "packages/wayoftime/bloodmagic/core/living/$LivingStats"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"

export interface $LivingUpgrade$IAttributeProvider {

 "handleAttributes"(arg0: $LivingStats$Type, arg1: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg2: $UUID$Type, arg3: $LivingUpgrade$Type, arg4: integer): void

(arg0: $LivingStats$Type, arg1: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg2: $UUID$Type, arg3: $LivingUpgrade$Type, arg4: integer): void
}

export namespace $LivingUpgrade$IAttributeProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingUpgrade$IAttributeProvider$Type = ($LivingUpgrade$IAttributeProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingUpgrade$IAttributeProvider_ = $LivingUpgrade$IAttributeProvider$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockDemonCrystal" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockDemonCrystal extends $Block implements $EntityBlock {
static readonly "AGE": $IntegerProperty
static readonly "ATTACHED": $EnumProperty<($Direction)>
readonly "type": $EnumDemonWillType
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

constructor(arg0: $EnumDemonWillType$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "getItemStackDropped"(arg0: $EnumDemonWillType$Type, arg1: integer): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDemonCrystal$Type = ($BlockDemonCrystal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDemonCrystal_ = $BlockDemonCrystal$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemIronThrowingDagger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemThrowingDagger, $ItemThrowingDagger$Type} from "packages/wayoftime/bloodmagic/common/item/$ItemThrowingDagger"
import {$AbstractEntityThrowingDagger, $AbstractEntityThrowingDagger$Type} from "packages/wayoftime/bloodmagic/entity/projectile/$AbstractEntityThrowingDagger"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemIronThrowingDagger extends $ItemThrowingDagger {
static "soulBracket": (integer)[]
static "soulDrop": (double)[]
static "staticDrop": (double)[]
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getDagger"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): $AbstractEntityThrowingDagger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemIronThrowingDagger$Type = ($ItemIronThrowingDagger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemIronThrowingDagger_ = $ItemIronThrowingDagger$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionIncreasePotencyRecipeSerializer" {
import {$RecipePotionIncreasePotency, $RecipePotionIncreasePotency$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionIncreasePotency"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$PotionIncreasePotencyRecipeSerializer$IFactory, $PotionIncreasePotencyRecipeSerializer$IFactory$Type} from "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionIncreasePotencyRecipeSerializer$IFactory"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $PotionIncreasePotencyRecipeSerializer<RECIPE extends $RecipePotionIncreasePotency> implements $RecipeSerializer<(RECIPE)> {

constructor(arg0: $PotionIncreasePotencyRecipeSerializer$IFactory$Type<(RECIPE)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): RECIPE
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): RECIPE
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: RECIPE): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): RECIPE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionIncreasePotencyRecipeSerializer$Type<RECIPE> = ($PotionIncreasePotencyRecipeSerializer<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionIncreasePotencyRecipeSerializer_<RECIPE> = $PotionIncreasePotencyRecipeSerializer$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockOutputRoutingNode" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockItemRoutingNode, $BlockItemRoutingNode$Type} from "packages/wayoftime/bloodmagic/common/block/$BlockItemRoutingNode"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockOutputRoutingNode extends $BlockItemRoutingNode {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
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

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockOutputRoutingNode$Type = ($BlockOutputRoutingNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockOutputRoutingNode_ = $BlockOutputRoutingNode$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/routing/$INodeRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $INodeRenderer {

}

export namespace $INodeRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INodeRenderer$Type = ($INodeRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INodeRenderer_ = $INodeRenderer$Type;
}}
declare module "packages/wayoftime/bloodmagic/core/living/$LivingStats" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LivingUpgrade, $LivingUpgrade$Type} from "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LivingStats {
static readonly "DEFAULT_UPGRADE_POINTS": integer

constructor(arg0: $Map$Type<($LivingUpgrade$Type), (double)>)
constructor()

public "getLevel"(arg0: $ResourceLocation$Type): integer
public "serialize"(): $CompoundTag
public "deserialize"(arg0: $CompoundTag$Type): void
public static "toPlayer"(arg0: $Player$Type, arg1: $LivingStats$Type): void
public "resetExperience"(arg0: $ResourceLocation$Type): $LivingStats
public static "fromNBT"(arg0: $CompoundTag$Type): $LivingStats
public "getUpgrades"(): $Map<($LivingUpgrade), (double)>
public "addExperience"(arg0: $ResourceLocation$Type, arg1: double): $LivingStats
public "getUsedPoints"(): integer
public "getMaxPoints"(): integer
public "setMaxPoints"(arg0: integer): $LivingStats
public static "fromPlayer"(arg0: $Player$Type, arg1: boolean): $LivingStats
public static "fromPlayer"(arg0: $Player$Type): $LivingStats
get "upgrades"(): $Map<($LivingUpgrade), (double)>
get "usedPoints"(): integer
get "maxPoints"(): integer
set "maxPoints"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingStats$Type = ($LivingStats);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingStats_ = $LivingStats$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemBindableBase" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Binding, $Binding$Type} from "packages/wayoftime/bloodmagic/core/data/$Binding"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IBindable, $IBindable$Type} from "packages/wayoftime/bloodmagic/common/item/$IBindable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBindableBase extends $Item implements $IBindable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getBinding"(arg0: $ItemStack$Type): $Binding
public "onBind"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBindableBase$Type = ($ItemBindableBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBindableBase_ = $ItemBindableBase$Type;
}}
declare module "packages/wayoftime/bloodmagic/core/data/$BMWorldSavedData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SavedData, $SavedData$Type} from "packages/net/minecraft/world/level/saveddata/$SavedData"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SoulNetwork, $SoulNetwork$Type} from "packages/wayoftime/bloodmagic/core/data/$SoulNetwork"

export class $BMWorldSavedData extends $SavedData {
static readonly "ID": string
static readonly "DUNGEON_DISPLACEMENT": integer

constructor(arg0: string)
constructor()

public static "load"(arg0: $CompoundTag$Type): $BMWorldSavedData
public "getNetwork"(arg0: $UUID$Type): $SoulNetwork
public "getNetwork"(arg0: $Player$Type): $SoulNetwork
public "save"(arg0: $CompoundTag$Type): $CompoundTag
public "setNumberOfDungeons"(arg0: integer): void
public "getNumberOfDungeons"(): integer
set "numberOfDungeons"(value: integer)
get "numberOfDungeons"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BMWorldSavedData$Type = ($BMWorldSavedData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BMWorldSavedData_ = $BMWorldSavedData$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockAlchemicalReactionChamber" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ItemParticleOption, $ItemParticleOption$Type} from "packages/net/minecraft/core/particles/$ItemParticleOption"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockAlchemicalReactionChamber extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "LIT": $BooleanProperty
static readonly "TYPE": $EnumProperty<($EnumDemonWillType)>
static readonly "PARTICLE_MAP": $Map<($EnumDemonWillType), ($ItemParticleOption)>
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

public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Random$Type): void
public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAlchemicalReactionChamber$Type = ($BlockAlchemicalReactionChamber);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAlchemicalReactionChamber_ = $BlockAlchemicalReactionChamber$Type;
}}
declare module "packages/wayoftime/bloodmagic/ritual/$EnumRitualReaderState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EnumRitualReaderState extends $Enum<($EnumRitualReaderState)> {
static readonly "SET_AREA": $EnumRitualReaderState
static readonly "INFORMATION": $EnumRitualReaderState
static readonly "SET_WILL_TYPES": $EnumRitualReaderState


public static "values"(): ($EnumRitualReaderState)[]
public static "valueOf"(arg0: string): $EnumRitualReaderState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumRitualReaderState$Type = (("set_will_types") | ("information") | ("set_area")) | ($EnumRitualReaderState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumRitualReaderState_ = $EnumRitualReaderState$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/sigil/$ISigil" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ISigil {

 "hasArrayEffect"(): boolean
 "performArrayEffect"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
}

export namespace $ISigil {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISigil$Type = ($ISigil);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISigil_ = $ISigil$Type;
}}
declare module "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionCycle" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EffectHolder, $EffectHolder$Type} from "packages/wayoftime/bloodmagic/recipe/$EffectHolder"
import {$RecipePotionFlaskBase, $RecipePotionFlaskBase$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionFlaskBase"

export class $RecipePotionCycle extends $RecipePotionFlaskBase {
 "numCycles": integer
static readonly "MAX_INPUTS": integer

constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: integer, arg3: integer, arg4: integer, arg5: integer)

public "write"(arg0: $FriendlyByteBuf$Type): void
public "getPriority"(arg0: $List$Type<($EffectHolder$Type)>): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "getOutput"(arg0: $ItemStack$Type, arg1: $List$Type<($EffectHolder$Type)>): $ItemStack
public "getExampleEffectList"(): $List<($EffectHolder)>
public "canModifyFlask"(arg0: $ItemStack$Type, arg1: $List$Type<($EffectHolder$Type)>): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "exampleEffectList"(): $List<($EffectHolder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipePotionCycle$Type = ($RecipePotionCycle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipePotionCycle_ = $RecipePotionCycle$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/soul/$ItemMonsterSoul" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDemonWill, $IDemonWill$Type} from "packages/wayoftime/bloodmagic/api/compat/$IDemonWill"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemMonsterSoul extends $Item implements $IDemonWill {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $EnumDemonWillType$Type)

public "getType"(arg0: $ItemStack$Type): $EnumDemonWillType
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getWill"(arg0: $EnumDemonWillType$Type, arg1: $ItemStack$Type): double
public "createWill"(arg0: double): $ItemStack
public "drainWill"(arg0: $EnumDemonWillType$Type, arg1: $ItemStack$Type, arg2: double): double
public "setWill"(arg0: $EnumDemonWillType$Type, arg1: $ItemStack$Type, arg2: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMonsterSoul$Type = ($ItemMonsterSoul);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMonsterSoul_ = $ItemMonsterSoul$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionFlaskTransformRecipeSerializer$IFactory" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$RecipePotionFlaskTransform, $RecipePotionFlaskTransform$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionFlaskTransform"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $PotionFlaskTransformRecipeSerializer$IFactory<RECIPE extends $RecipePotionFlaskTransform> {

 "create"(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: integer, arg4: integer, arg5: integer): RECIPE

(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: integer, arg4: integer, arg5: integer): RECIPE
}

export namespace $PotionFlaskTransformRecipeSerializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionFlaskTransformRecipeSerializer$IFactory$Type<RECIPE> = ($PotionFlaskTransformRecipeSerializer$IFactory<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionFlaskTransformRecipeSerializer$IFactory_<RECIPE> = $PotionFlaskTransformRecipeSerializer$IFactory$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemLivingTome" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ILivingContainer, $ILivingContainer$Type} from "packages/wayoftime/bloodmagic/core/living/$ILivingContainer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LivingStats, $LivingStats$Type} from "packages/wayoftime/bloodmagic/core/living/$LivingStats"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ILivingUpgradePointsProvider, $ILivingUpgradePointsProvider$Type} from "packages/wayoftime/bloodmagic/common/item/$ILivingUpgradePointsProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemLivingTome extends $Item implements $ILivingContainer, $ILivingUpgradePointsProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getPriority"(arg0: $ItemStack$Type): integer
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getAvailableUpgradePoints"(arg0: $ItemStack$Type, arg1: integer): integer
public "getExcessUpgradePoints"(arg0: $ItemStack$Type, arg1: integer): integer
public "getTotalUpgradePoints"(arg0: $ItemStack$Type): integer
public "getResultingStack"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
public "canSyphonPoints"(arg0: $ItemStack$Type, arg1: integer): boolean
public static "appendLivingTooltip"(arg0: $ItemStack$Type, arg1: $LivingStats$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
public static "setDisplayIfZero"(arg0: $ItemStack$Type, arg1: boolean): void
public "getLivingStats"(arg0: $ItemStack$Type): $LivingStats
public static "displayIfLevelZero"(arg0: $ItemStack$Type): boolean
public "updateLivingStats"(arg0: $ItemStack$Type, arg1: $LivingStats$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLivingTome$Type = ($ItemLivingTome);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLivingTome_ = $ItemLivingTome$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilMagnetism" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemSigilToggleableBase, $ItemSigilToggleableBase$Type} from "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilToggleableBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSigilMagnetism extends $ItemSigilToggleableBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "onSigilUpdate"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: integer, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSigilMagnetism$Type = ($ItemSigilMagnetism);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSigilMagnetism_ = $ItemSigilMagnetism$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockDungeonSeal" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockDungeonSeal extends $Block implements $EntityBlock {
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

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDungeonSeal$Type = ($BlockDungeonSeal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDungeonSeal_ = $BlockDungeonSeal$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ITeleposerFocus" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Binding, $Binding$Type} from "packages/wayoftime/bloodmagic/core/data/$Binding"
import {$IBindable, $IBindable$Type} from "packages/wayoftime/bloodmagic/common/item/$IBindable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $ITeleposerFocus extends $IBindable {

 "getEntityRangeOffset"(arg0: $Level$Type, arg1: $BlockPos$Type): $AABB
 "getBlockListOffset"(arg0: $Level$Type): $List<($BlockPos)>
 "getStoredWorld"(arg0: $ItemStack$Type, arg1: $Level$Type): $Level
 "getStoredPos"(arg0: $ItemStack$Type): $BlockPos
 "getBinding"(arg0: $ItemStack$Type): $Binding
 "onBind"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
}

export namespace $ITeleposerFocus {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITeleposerFocus$Type = ($ITeleposerFocus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITeleposerFocus_ = $ITeleposerFocus$Type;
}}
declare module "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade$IDamageProvider" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LivingUpgrade, $LivingUpgrade$Type} from "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade"
import {$LivingStats, $LivingStats$Type} from "packages/wayoftime/bloodmagic/core/living/$LivingStats"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $LivingUpgrade$IDamageProvider {

 "getAdditionalDamage"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: double, arg3: $LivingStats$Type, arg4: $LivingEntity$Type, arg5: $LivingUpgrade$Type, arg6: integer): double

(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: double, arg3: $LivingStats$Type, arg4: $LivingEntity$Type, arg5: $LivingUpgrade$Type, arg6: integer): double
}

export namespace $LivingUpgrade$IDamageProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingUpgrade$IDamageProvider$Type = ($LivingUpgrade$IDamageProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingUpgrade$IDamageProvider_ = $LivingUpgrade$IDamageProvider$Type;
}}
declare module "packages/wayoftime/bloodmagic/api/compat/$IMultiWillTool" {
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IMultiWillTool {

 "getCurrentType"(arg0: $ItemStack$Type): $EnumDemonWillType

(arg0: $ItemStack$Type): $EnumDemonWillType
}

export namespace $IMultiWillTool {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiWillTool$Type = ($IMultiWillTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiWillTool_ = $IMultiWillTool$Type;
}}
declare module "packages/wayoftime/bloodmagic/potion/$PotionBloodMagic" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $PotionBloodMagic extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBloodMagic$Type = ($PotionBloodMagic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionBloodMagic_ = $PotionBloodMagic$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$MeteorRecipeSerializer" {
import {$RecipeMeteor, $RecipeMeteor$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeMeteor"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$MeteorRecipeSerializer$IFactory, $MeteorRecipeSerializer$IFactory$Type} from "packages/wayoftime/bloodmagic/common/recipe/serializer/$MeteorRecipeSerializer$IFactory"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $MeteorRecipeSerializer<RECIPE extends $RecipeMeteor> implements $RecipeSerializer<(RECIPE)> {

constructor(arg0: $MeteorRecipeSerializer$IFactory$Type<(RECIPE)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): RECIPE
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): RECIPE
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: RECIPE): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): RECIPE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeteorRecipeSerializer$Type<RECIPE> = ($MeteorRecipeSerializer<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeteorRecipeSerializer_<RECIPE> = $MeteorRecipeSerializer$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/item/potion/$ItemAlchemyFlask" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EffectHolder, $EffectHolder$Type} from "packages/wayoftime/bloodmagic/recipe/$EffectHolder"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemAlchemyFlask extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "setEffectHoldersOfFlask"(arg0: $ItemStack$Type, arg1: $List$Type<($EffectHolder$Type)>): void
public "resyncEffectInstances"(arg0: $ItemStack$Type): void
public "getEffectHoldersOfFlask"(arg0: $ItemStack$Type): $List<($EffectHolder)>
public "getRemainingUses"(arg0: $ItemStack$Type): integer
public "setEffectsOfFlask"(arg0: $ItemStack$Type, arg1: $Collection$Type<($MobEffectInstance$Type)>): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAlchemyFlask$Type = ($ItemAlchemyFlask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAlchemyFlask_ = $ItemAlchemyFlask$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemLivingTrainer" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ILivingContainer, $ILivingContainer$Type} from "packages/wayoftime/bloodmagic/core/living/$ILivingContainer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$InventoryTrainingBracelet, $InventoryTrainingBracelet$Type} from "packages/wayoftime/bloodmagic/common/item/inventory/$InventoryTrainingBracelet"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LivingStats, $LivingStats$Type} from "packages/wayoftime/bloodmagic/core/living/$LivingStats"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemLivingTrainer extends $Item implements $ILivingContainer, $MenuProvider {
static readonly "MAX_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDisplayName"(): $Component
public "getIsWhitelist"(arg0: $ItemStack$Type): boolean
public "setIsWhitelist"(arg0: $ItemStack$Type, arg1: boolean): void
public "setTomeLevel"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): void
public "toInventory"(arg0: $ItemStack$Type): $InventoryTrainingBracelet
public "fromItemStackList"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>): void
public "fromInventory"(arg0: $ItemStack$Type, arg1: $InventoryTrainingBracelet$Type): void
public "toItemStackList"(arg0: $ItemStack$Type): $List<($ItemStack)>
public static "appendLivingTooltip"(arg0: $ItemStack$Type, arg1: $LivingStats$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
public static "setDisplayIfZero"(arg0: $ItemStack$Type, arg1: boolean): void
public "getLivingStats"(arg0: $ItemStack$Type): $LivingStats
public static "displayIfLevelZero"(arg0: $ItemStack$Type): boolean
public "updateLivingStats"(arg0: $ItemStack$Type, arg1: $LivingStats$Type): void
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLivingTrainer$Type = ($ItemLivingTrainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLivingTrainer_ = $ItemLivingTrainer$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockSoulForge" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockSoulForge extends $Block implements $EntityBlock {
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
public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSoulForge$Type = ($BlockSoulForge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSoulForge_ = $BlockSoulForge$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/tile/$TileDemonCrystal" {
import {$DemonWillHolder, $DemonWillHolder$Type} from "packages/wayoftime/bloodmagic/will/$DemonWillHolder"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TileTicking, $TileTicking$Type} from "packages/wayoftime/bloodmagic/common/tile/base/$TileTicking"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TileDemonCrystal extends $TileTicking {
static readonly "sameWillConversionRate": double
static readonly "defaultWillConversionRate": double
static readonly "timeDelayForWrongWill": double
readonly "maxWill": integer
 "holder": $DemonWillHolder
 "progressToNextCrystal": double
 "internalCounter": integer
 "placement": $Direction
 "injectedWill": double
 "speedModifier": double
 "appliedConversionRate": double
 "willType": $EnumDemonWillType

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)
constructor(arg0: $EnumDemonWillType$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $EnumDemonWillType$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "serialize"(arg0: $CompoundTag$Type): $CompoundTag
public "deserialize"(arg0: $CompoundTag$Type): void
public "setPlacement"(arg0: $Direction$Type): void
public "getPlacement"(): $Direction
public "getWillType"(): $EnumDemonWillType
public "applyCatalyst"(arg0: double, arg1: double, arg2: double): void
public "getInjectedWill"(): double
public "checkAndGrowCrystal"(): void
public "growCrystalWithWillAmount"(arg0: double, arg1: double): double
public "getMaxWillForCrystal"(): double
public "getCrystalGrowthPerSecond"(arg0: double): double
public "dropSingleCrystal"(): boolean
public "setCrystalCount"(arg0: integer): void
public "getCrystalCount"(): integer
public "onUpdate"(): void
set "placement"(value: $Direction$Type)
get "placement"(): $Direction
get "willType"(): $EnumDemonWillType
get "injectedWill"(): double
get "maxWillForCrystal"(): double
set "crystalCount"(value: integer)
get "crystalCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileDemonCrystal$Type = ($TileDemonCrystal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileDemonCrystal_ = $TileDemonCrystal$Type;
}}
declare module "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionIncreasePotency" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$EffectHolder, $EffectHolder$Type} from "packages/wayoftime/bloodmagic/recipe/$EffectHolder"
import {$RecipePotionFlaskBase, $RecipePotionFlaskBase$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionFlaskBase"

export class $RecipePotionIncreasePotency extends $RecipePotionFlaskBase {
 "outputEffect": $MobEffect
 "amplifier": integer
 "ampDurationMod": double
static readonly "MAX_INPUTS": integer

constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $MobEffect$Type, arg3: integer, arg4: double, arg5: integer, arg6: integer, arg7: integer)

public "write"(arg0: $FriendlyByteBuf$Type): void
public "getPriority"(arg0: $List$Type<($EffectHolder$Type)>): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "getOutput"(arg0: $ItemStack$Type, arg1: $List$Type<($EffectHolder$Type)>): $ItemStack
public "getExampleEffectList"(): $List<($EffectHolder)>
public "canModifyFlask"(arg0: $ItemStack$Type, arg1: $List$Type<($EffectHolder$Type)>): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "exampleEffectList"(): $List<($EffectHolder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipePotionIncreasePotency$Type = ($RecipePotionIncreasePotency);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipePotionIncreasePotency_ = $RecipePotionIncreasePotency$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockMimic" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockMimic extends $Block implements $EntityBlock {
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
public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMimic$Type = ($BlockMimic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMimic_ = $BlockMimic$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/routing/$ItemBasicNodeUpgrade" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IRouterUpgrade, $IRouterUpgrade$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$IRouterUpgrade"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBasicNodeUpgrade extends $Item implements $IRouterUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getMaxTransferIncrease"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBasicNodeUpgrade$Type = ($ItemBasicNodeUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBasicNodeUpgrade_ = $ItemBasicNodeUpgrade$Type;
}}
declare module "packages/wayoftime/bloodmagic/recipe/helper/$FluidStackIngredient" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$InputIngredient, $InputIngredient$Type} from "packages/wayoftime/bloodmagic/recipe/helper/$InputIngredient"

export class $FluidStackIngredient implements $InputIngredient<($FluidStack)> {

constructor()

public static "read"(arg0: $FriendlyByteBuf$Type): $FluidStackIngredient
public static "from"(arg0: $TagKey$Type<($Fluid$Type)>, arg1: integer): $FluidStackIngredient
public static "from"(arg0: $FluidStack$Type): $FluidStackIngredient
public static "from"(arg0: $Fluid$Type, arg1: integer): $FluidStackIngredient
public static "deserialize"(arg0: $JsonElement$Type): $FluidStackIngredient
public static "createMulti"(...arg0: ($FluidStackIngredient$Type)[]): $FluidStackIngredient
public "write"(arg0: $FriendlyByteBuf$Type): void
public "serialize"(): $JsonElement
public "getRepresentations"(): $List<($FluidStack)>
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
declare module "packages/wayoftime/bloodmagic/ritual/$IMasterRitualStone" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$EnumReaderBoundaries, $EnumReaderBoundaries$Type} from "packages/wayoftime/bloodmagic/ritual/$EnumReaderBoundaries"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AreaDescriptor, $AreaDescriptor$Type} from "packages/wayoftime/bloodmagic/ritual/$AreaDescriptor"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Ritual, $Ritual$Type} from "packages/wayoftime/bloodmagic/ritual/$Ritual"
import {$Ritual$BreakType, $Ritual$BreakType$Type} from "packages/wayoftime/bloodmagic/ritual/$Ritual$BreakType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SoulTicket, $SoulTicket$Type} from "packages/wayoftime/bloodmagic/core/data/$SoulTicket"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SoulNetwork, $SoulNetwork$Type} from "packages/wayoftime/bloodmagic/core/data/$SoulNetwork"
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IMasterRitualStone {

 "isActive"(): boolean
 "getOwner"(): $UUID
 "ticket"(arg0: integer): $SoulTicket
 "getDirection"(): $Direction
 "getCooldown"(): integer
 "setCooldown"(arg0: integer): void
 "setActive"(arg0: boolean): void
 "provideInformationOfWillConfigToPlayer"(arg0: $Player$Type, arg1: $List$Type<($EnumDemonWillType$Type)>): void
 "activateRitual"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Ritual$Type): boolean
 "provideInformationOfRangeToPlayer"(arg0: $Player$Type, arg1: string): void
 "provideInformationOfRitualToPlayer"(arg0: $Player$Type): void
 "setBlockRangeByBounds"(arg0: $Player$Type, arg1: string, arg2: $BlockPos$Type, arg3: $BlockPos$Type): $EnumReaderBoundaries
 "setActiveWillConfig"(arg0: $Player$Type, arg1: $List$Type<($EnumDemonWillType$Type)>): void
 "getActiveWillConfig"(): $List<($EnumDemonWillType)>
 "performRitual"(arg0: $Level$Type, arg1: $BlockPos$Type): void
 "stopRitual"(arg0: $Ritual$BreakType$Type): void
 "getMasterBlockPos"(): $BlockPos
 "setBlockRange"(arg0: string, arg1: $AreaDescriptor$Type): void
 "getWorldObj"(): $Level
 "getNextBlockRange"(arg0: string): string
 "getBlockRange"(arg0: string): $AreaDescriptor
 "getCurrentRitual"(): $Ritual
 "addBlockRanges"(arg0: $Map$Type<(string), ($AreaDescriptor$Type)>): void
 "areTanksEmpty"(): boolean
 "getOwnerNetwork"(): $SoulNetwork
 "getRunningTime"(): integer
 "addBlockRange"(arg0: string, arg1: $AreaDescriptor$Type): void
 "setBlockRanges"(arg0: $Map$Type<(string), ($AreaDescriptor$Type)>): void
}

export namespace $IMasterRitualStone {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMasterRitualStone$Type = ($IMasterRitualStone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMasterRitualStone_ = $IMasterRitualStone$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionFillRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$PotionFillRecipeSerializer$IFactory, $PotionFillRecipeSerializer$IFactory$Type} from "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionFillRecipeSerializer$IFactory"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$RecipePotionFill, $RecipePotionFill$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionFill"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $PotionFillRecipeSerializer<RECIPE extends $RecipePotionFill> implements $RecipeSerializer<(RECIPE)> {

constructor(arg0: $PotionFillRecipeSerializer$IFactory$Type<(RECIPE)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): RECIPE
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): RECIPE
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: RECIPE): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): RECIPE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionFillRecipeSerializer$Type<RECIPE> = ($PotionFillRecipeSerializer<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionFillRecipeSerializer_<RECIPE> = $PotionFillRecipeSerializer$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/ritual/$EnumReaderBoundaries" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumReaderBoundaries extends $Enum<($EnumReaderBoundaries)> implements $StringRepresentable {
static readonly "SUCCESS": $EnumReaderBoundaries
static readonly "VOLUME_TOO_LARGE": $EnumReaderBoundaries
static readonly "NOT_WITHIN_BOUNDARIES": $EnumReaderBoundaries


public "toString"(): string
public static "values"(): ($EnumReaderBoundaries)[]
public static "valueOf"(arg0: string): $EnumReaderBoundaries
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumReaderBoundaries$Type = (("success") | ("volume_too_large") | ("not_within_boundaries")) | ($EnumReaderBoundaries);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumReaderBoundaries_ = $EnumReaderBoundaries$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionEffectRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$PotionEffectRecipeSerializer$IFactory, $PotionEffectRecipeSerializer$IFactory$Type} from "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionEffectRecipeSerializer$IFactory"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RecipePotionEffect, $RecipePotionEffect$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionEffect"

export class $PotionEffectRecipeSerializer<RECIPE extends $RecipePotionEffect> implements $RecipeSerializer<(RECIPE)> {

constructor(arg0: $PotionEffectRecipeSerializer$IFactory$Type<(RECIPE)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): RECIPE
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): RECIPE
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: RECIPE): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): RECIPE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionEffectRecipeSerializer$Type<RECIPE> = ($PotionEffectRecipeSerializer<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionEffectRecipeSerializer_<RECIPE> = $PotionEffectRecipeSerializer$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockIncenseAltar" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockIncenseAltar extends $Block implements $EntityBlock {
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
public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockIncenseAltar$Type = ($BlockIncenseAltar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockIncenseAltar_ = $BlockIncenseAltar$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/registration/$WrappedRegistryObject" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$INamedEntry, $INamedEntry$Type} from "packages/wayoftime/bloodmagic/common/registration/$INamedEntry"

export class $WrappedRegistryObject<T> implements $Supplier<(T)>, $INamedEntry {


public "get"(): T
public "getInternalRegistryName"(): string
get "internalRegistryName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedRegistryObject$Type<T> = ($WrappedRegistryObject<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedRegistryObject_<T> = $WrappedRegistryObject$Type<(T)>;
}}
declare module "packages/wayoftime/bloodmagic/potion/$PotionSoftFall" {
import {$PotionBloodMagic, $PotionBloodMagic$Type} from "packages/wayoftime/bloodmagic/potion/$PotionBloodMagic"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $PotionSoftFall extends $PotionBloodMagic {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionSoftFall$Type = ($PotionSoftFall);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionSoftFall_ = $PotionSoftFall$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockRectangularShapedExplosive" {
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockShapedExplosive, $BlockShapedExplosive$Type} from "packages/wayoftime/bloodmagic/common/block/$BlockShapedExplosive"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockRectangularShapedExplosive extends $BlockShapedExplosive {
readonly "depth": integer
static readonly "ATTACHED": $EnumProperty<($Direction)>
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

constructor(arg0: integer, arg1: integer, arg2: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRectangularShapedExplosive$Type = ($BlockRectangularShapedExplosive);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRectangularShapedExplosive_ = $BlockRectangularShapedExplosive$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBase extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: integer, arg1: string)
constructor(arg0: integer)
constructor(arg0: string)
constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBase$Type = ($ItemBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBase_ = $ItemBase$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/meteor/$RandomBlockContainer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $RandomBlockContainer {

constructor()

public "getEntry"(): string
public "serialize"(): $JsonObject
public "serialize"(arg0: integer): $JsonObject
public static "parseTagEntry"(arg0: string, arg1: integer): $RandomBlockContainer
public static "deserializeWeightedPair"(arg0: $JsonObject$Type): $Pair<($RandomBlockContainer), (integer)>
public static "deserializeContainer"(arg0: $JsonObject$Type): $RandomBlockContainer
public static "parseEntry"(arg0: string): $RandomBlockContainer
public static "parseBlockEntry"(arg0: string): $RandomBlockContainer
public static "parseFluidEntry"(arg0: string): $RandomBlockContainer
public "getRandomBlock"(arg0: $RandomSource$Type, arg1: $Level$Type): $Block
get "entry"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomBlockContainer$Type = ($RandomBlockContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RandomBlockContainer_ = $RandomBlockContainer$Type;
}}
declare module "packages/wayoftime/bloodmagic/entity/projectile/$AbstractEntityThrowingDagger" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ThrowableItemProjectile, $ThrowableItemProjectile$Type} from "packages/net/minecraft/world/entity/projectile/$ThrowableItemProjectile"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractArrow$Pickup, $AbstractArrow$Pickup$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow$Pickup"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$MoverType, $MoverType$Type} from "packages/net/minecraft/world/entity/$MoverType"

export class $AbstractEntityThrowingDagger extends $ThrowableItemProjectile {
 "pickupStatus": $AbstractArrow$Pickup
 "arrowShake": integer
 "leftOwner": boolean
 "hasBeenShot": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "vehicle": $Entity
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "position": $Vec3
 "blockPosition": $BlockPos
 "yRot": float
 "xRot": float
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "nextStep": float
 "xOld": double
 "yOld": double
 "zOld": double
 "stepHeight": float
 "noPhysics": boolean
 "age": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "levelCallback": $EntityInLevelCallback
 "noCulling": boolean
 "hasImpulse": boolean
 "portalEntrancePos": $BlockPos
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>

constructor(arg0: $EntityType$Type<(any)>, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: double, arg4: double, arg5: double)
constructor(arg0: $EntityType$Type<(any)>, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $LivingEntity$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "tick"(): void
public "move"(arg0: $MoverType$Type, arg1: $Vec3$Type): void
public "getColor"(): integer
public "setItem"(arg0: $ItemStack$Type): void
public "addEffect"(arg0: $MobEffectInstance$Type): void
public "getWillDropForMobHealth"(arg0: double): double
public "getDamage"(): double
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
public "handleEntityEvent"(arg0: byte): void
public "playerTouch"(arg0: $Player$Type): void
public "readAdditionalSaveData"(arg0: $CompoundTag$Type): void
public "addAdditionalSaveData"(arg0: $CompoundTag$Type): void
public "setDamage"(arg0: double): void
public "getPierceLevel"(): byte
public static "getCustomColor"(arg0: $ItemStack$Type): integer
public "getIsCritical"(): boolean
public "setHitSound"(arg0: $SoundEvent$Type): void
public "setWillDrop"(arg0: double): void
public "setEffectsFromItem"(arg0: $ItemStack$Type): void
public "getNoClip"(): boolean
public "setWillType"(arg0: $EnumDemonWillType$Type): void
get "color"(): integer
set "item"(value: $ItemStack$Type)
get "damage"(): double
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
set "damage"(value: double)
get "pierceLevel"(): byte
get "isCritical"(): boolean
set "hitSound"(value: $SoundEvent$Type)
set "willDrop"(value: double)
set "effectsFromItem"(value: $ItemStack$Type)
get "noClip"(): boolean
set "willType"(value: $EnumDemonWillType$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractEntityThrowingDagger$Type = ($AbstractEntityThrowingDagger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractEntityThrowingDagger_ = $AbstractEntityThrowingDagger$Type;
}}
declare module "packages/wayoftime/bloodmagic/recipe/$BloodMagicRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$IgnoredIInventory, $IgnoredIInventory$Type} from "packages/wayoftime/bloodmagic/recipe/helper/$IgnoredIInventory"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $BloodMagicRecipe implements $Recipe<($IgnoredIInventory)> {


public "matches"(arg0: $IgnoredIInventory$Type, arg1: $Level$Type): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "assemble"(arg0: $IgnoredIInventory$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getRemainingItems"(arg0: $IgnoredIInventory$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
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
get "special"(): boolean
get "id"(): $ResourceLocation
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
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
export type $BloodMagicRecipe$Type = ($BloodMagicRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloodMagicRecipe_ = $BloodMagicRecipe$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$AlchemyTableRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$AlchemyTableRecipeSerializer$IFactory, $AlchemyTableRecipeSerializer$IFactory$Type} from "packages/wayoftime/bloodmagic/common/recipe/serializer/$AlchemyTableRecipeSerializer$IFactory"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RecipeAlchemyTable, $RecipeAlchemyTable$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeAlchemyTable"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $AlchemyTableRecipeSerializer<RECIPE extends $RecipeAlchemyTable> implements $RecipeSerializer<(RECIPE)> {

constructor(arg0: $AlchemyTableRecipeSerializer$IFactory$Type<(RECIPE)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): RECIPE
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): RECIPE
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: RECIPE): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): RECIPE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyTableRecipeSerializer$Type<RECIPE> = ($AlchemyTableRecipeSerializer<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyTableRecipeSerializer_<RECIPE> = $AlchemyTableRecipeSerializer$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilBloodLight" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemSigilBase, $ItemSigilBase$Type} from "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemSigilBloodLight extends $ItemSigilBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "resetCooldown"(arg0: $ItemStack$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "getCooldownRemainder"(arg0: $ItemStack$Type): integer
public "reduceCooldown"(arg0: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSigilBloodLight$Type = ($ItemSigilBloodLight);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSigilBloodLight_ = $ItemSigilBloodLight$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/routing/$ICompositeItemFilterProvider" {
import {$IItemFilter, $IItemFilter$Type} from "packages/wayoftime/bloodmagic/common/routing/$IItemFilter"
import {$ContainerFilter, $ContainerFilter$Type} from "packages/wayoftime/bloodmagic/common/container/item/$ContainerFilter"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IFilterKey, $IFilterKey$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$IFilterKey"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$IItemFilterProvider, $IItemFilterProvider$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$IItemFilterProvider"
import {$Button$OnPress, $Button$OnPress$Type} from "packages/net/minecraft/client/gui/components/$Button$OnPress"

export interface $ICompositeItemFilterProvider extends $IItemFilterProvider {

 "nestFilter"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
 "canReceiveNestedFilter"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "getFilterKey"(arg0: $ItemStack$Type, arg1: integer, arg2: $ItemStack$Type, arg3: integer): $IFilterKey
 "getInputItemFilter"(arg0: $ItemStack$Type, arg1: $BlockEntity$Type, arg2: $IItemHandler$Type): $IItemFilter
 "setGhostItemAmount"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): void
 "receiveButtonPress"(arg0: $ItemStack$Type, arg1: string, arg2: integer, arg3: integer): integer
 "isButtonGlobal"(arg0: $ItemStack$Type, arg1: string): boolean
 "getButtonAction"(arg0: $ContainerFilter$Type): $List<($Pair<(string), ($Button$OnPress)>)>
 "getCurrentButtonState"(arg0: $ItemStack$Type, arg1: string, arg2: integer): integer
 "getUninitializedItemFilter"(arg0: $ItemStack$Type): $IItemFilter
 "getTexturePositionForState"(arg0: $ItemStack$Type, arg1: string, arg2: integer): $Pair<(integer), (integer)>
 "getTextForHoverItem"(arg0: $ItemStack$Type, arg1: string, arg2: integer): $List<($Component)>
 "getOutputItemFilter"(arg0: $ItemStack$Type, arg1: $BlockEntity$Type, arg2: $IItemHandler$Type): $IItemFilter
 "getContainedStackForItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
}

export namespace $ICompositeItemFilterProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICompositeItemFilterProvider$Type = ($ICompositeItemFilterProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICompositeItemFilterProvider_ = $ICompositeItemFilterProvider$Type;
}}
declare module "packages/wayoftime/bloodmagic/util/$BooleanResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BooleanResult<T> {


public "getValue"(): T
public "isSuccess"(): boolean
public static "newResult"<T>(arg0: boolean, arg1: T): $BooleanResult<(T)>
get "value"(): T
get "success"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanResult$Type<T> = ($BooleanResult<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanResult_<T> = $BooleanResult$Type<(T)>;
}}
declare module "packages/wayoftime/bloodmagic/common/item/soul/$ItemSentientPickaxe" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDemonWillWeapon, $IDemonWillWeapon$Type} from "packages/wayoftime/bloodmagic/api/compat/$IDemonWillWeapon"
import {$IMultiWillTool, $IMultiWillTool$Type} from "packages/wayoftime/bloodmagic/api/compat/$IMultiWillTool"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PickaxeItem, $PickaxeItem$Type} from "packages/net/minecraft/world/item/$PickaxeItem"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSentientPickaxe extends $PickaxeItem implements $IDemonWillWeapon, $IMultiWillTool {
static "soulBracket": (integer)[]
static "defaultDamageAdded": (double)[]
static "destructiveDamageAdded": (double)[]
static "vengefulDamageAdded": (double)[]
static "steadfastDamageAdded": (double)[]
static "defaultDigSpeedAdded": (double)[]
static "soulDrainPerSwing": (double)[]
static "soulDrop": (double)[]
static "staticDrop": (double)[]
static "healthBonus": (double)[]
static "vengefulAttackSpeed": (double)[]
static "destructiveAttackSpeed": (double)[]
static "absorptionTime": (integer)[]
static "maxAbsorptionHearts": double
static "poisonTime": (integer)[]
static "poisonLevel": (integer)[]
static "movementSpeed": (double)[]
static readonly "baseAttackDamage": double
static readonly "baseAttackSpeed": double
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

constructor()

public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "getDigSpeed"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "getMovementSpeed"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "getRandomDemonWillDrop"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): $List<($ItemStack)>
public "getDropOfActivatedSword"(arg0: $ItemStack$Type): double
public "setDamageOfActivatedSword"(arg0: $ItemStack$Type, arg1: double): void
public "setAttackSpeedOfSword"(arg0: $ItemStack$Type, arg1: double): void
public "getDamageOfActivatedSword"(arg0: $ItemStack$Type): double
public "setDropOfActivatedSword"(arg0: $ItemStack$Type, arg1: double): void
public "applyEffectToEntity"(arg0: $EnumDemonWillType$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $Player$Type): void
public "setHealthBonusOfSword"(arg0: $ItemStack$Type, arg1: double): void
public "getStaticDropOfActivatedSword"(arg0: $ItemStack$Type): double
public "getAttackSpeedOfSword"(arg0: $ItemStack$Type): double
public "getHealthBonusOfSword"(arg0: $ItemStack$Type): double
public "setStaticDropOfActivatedSword"(arg0: $ItemStack$Type, arg1: double): void
public "setDrainOfActivatedSword"(arg0: $ItemStack$Type, arg1: double): void
public "getDrainOfActivatedSword"(arg0: $ItemStack$Type): double
public "getHealthBonus"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "getExtraDamage"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "recalculatePowers"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "setCurrentType"(arg0: $ItemStack$Type, arg1: $EnumDemonWillType$Type): void
public "getDigSpeedOfSword"(arg0: $ItemStack$Type): double
public "setSpeedOfSword"(arg0: $ItemStack$Type, arg1: double): void
public "setDigSpeedOfSword"(arg0: $ItemStack$Type, arg1: double): void
public "getSpeedOfSword"(arg0: $ItemStack$Type): double
public "getAttackSpeed"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "getCurrentType"(arg0: $ItemStack$Type): $EnumDemonWillType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSentientPickaxe$Type = ($ItemSentientPickaxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSentientPickaxe_ = $ItemSentientPickaxe$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemSyntheticPoint" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ILivingUpgradePointsProvider, $ILivingUpgradePointsProvider$Type} from "packages/wayoftime/bloodmagic/common/item/$ILivingUpgradePointsProvider"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSyntheticPoint extends $Item implements $ILivingUpgradePointsProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getPriority"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getAvailableUpgradePoints"(arg0: $ItemStack$Type, arg1: integer): integer
public "getExcessUpgradePoints"(arg0: $ItemStack$Type, arg1: integer): integer
public "getTotalUpgradePoints"(arg0: $ItemStack$Type): integer
public "getResultingStack"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
public "canSyphonPoints"(arg0: $ItemStack$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSyntheticPoint$Type = ($ItemSyntheticPoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSyntheticPoint_ = $ItemSyntheticPoint$Type;
}}
declare module "packages/wayoftime/bloodmagic/ritual/$Ritual" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$RitualComponent, $RitualComponent$Type} from "packages/wayoftime/bloodmagic/ritual/$RitualComponent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$EnumReaderBoundaries, $EnumReaderBoundaries$Type} from "packages/wayoftime/bloodmagic/ritual/$EnumReaderBoundaries"
import {$AreaDescriptor, $AreaDescriptor$Type} from "packages/wayoftime/bloodmagic/ritual/$AreaDescriptor"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$DemonWillHolder, $DemonWillHolder$Type} from "packages/wayoftime/bloodmagic/will/$DemonWillHolder"
import {$Ritual$BreakType, $Ritual$BreakType$Type} from "packages/wayoftime/bloodmagic/ritual/$Ritual$BreakType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$RitualRenderer, $RitualRenderer$Type} from "packages/wayoftime/bloodmagic/ritual/$RitualRenderer"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IMasterRitualStone, $IMasterRitualStone$Type} from "packages/wayoftime/bloodmagic/ritual/$IMasterRitualStone"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Ritual {

constructor(arg0: string, arg1: integer, arg2: integer, arg3: $RitualRenderer$Type, arg4: string)
constructor(arg0: string, arg1: integer, arg2: integer, arg3: string)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getRenderer"(): $RitualRenderer
public "activateRitual"(arg0: $IMasterRitualStone$Type, arg1: $Player$Type, arg2: $UUID$Type): boolean
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "getTranslationKey"(): string
public "provideInformationOfRangeToPlayer"(arg0: $Player$Type, arg1: string): $Component
public "provideInformationOfRitualToPlayer"(arg0: $Player$Type): ($Component)[]
public "getMaxVolumeForRange"(arg0: string, arg1: $List$Type<($EnumDemonWillType$Type)>, arg2: $DemonWillHolder$Type): integer
public "getMaxHorizontalRadiusForRange"(arg0: string, arg1: $List$Type<($EnumDemonWillType$Type)>, arg2: $DemonWillHolder$Type): integer
public "getMaxVerticalRadiusForRange"(arg0: string, arg1: $List$Type<($EnumDemonWillType$Type)>, arg2: $DemonWillHolder$Type): integer
public "performRitual"(arg0: $IMasterRitualStone$Type): void
public "stopRitual"(arg0: $IMasterRitualStone$Type, arg1: $Ritual$BreakType$Type): void
public "getListOfRanges"(): $List<(string)>
public "getNextBlockRange"(arg0: string): string
public "getBlockRange"(arg0: string): $AreaDescriptor
public "getCrystalLevel"(): integer
public "getRefreshCost"(): integer
public "getVolumeRangeMap"(): $Map<(string), (integer)>
public "getErrorForBlockRangeOnFail"(arg0: $Player$Type, arg1: string, arg2: $IMasterRitualStone$Type, arg3: $BlockPos$Type, arg4: $BlockPos$Type): $Component
public "getWillRespectingConfig"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $EnumDemonWillType$Type, arg3: $List$Type<($EnumDemonWillType$Type)>): double
public "getHorizontalRangeMap"(): $Map<(string), (integer)>
public "getVerticalRangeMap"(): $Map<(string), (integer)>
public "getRefreshTime"(): integer
public "getModableRangeMap"(): $Map<(string), ($AreaDescriptor)>
public "getActivationCost"(): integer
public "addBlockRange"(arg0: string, arg1: $AreaDescriptor$Type): void
public "getNewCopy"(): $Ritual
public "gatherComponents"(arg0: $Consumer$Type<($RitualComponent$Type)>): void
public "canBlockRangeBeModified"(arg0: string, arg1: $AreaDescriptor$Type, arg2: $IMasterRitualStone$Type, arg3: $BlockPos$Type, arg4: $BlockPos$Type, arg5: $DemonWillHolder$Type): $EnumReaderBoundaries
get "name"(): string
get "renderer"(): $RitualRenderer
get "translationKey"(): string
get "listOfRanges"(): $List<(string)>
get "crystalLevel"(): integer
get "refreshCost"(): integer
get "volumeRangeMap"(): $Map<(string), (integer)>
get "horizontalRangeMap"(): $Map<(string), (integer)>
get "verticalRangeMap"(): $Map<(string), (integer)>
get "refreshTime"(): integer
get "modableRangeMap"(): $Map<(string), ($AreaDescriptor)>
get "activationCost"(): integer
get "newCopy"(): $Ritual
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ritual$Type = ($Ritual);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ritual_ = $Ritual$Type;
}}
declare module "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade$Level" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $LivingUpgrade$Level {

constructor(arg0: integer, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingUpgrade$Level$Type = ($LivingUpgrade$Level);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingUpgrade$Level_ = $LivingUpgrade$Level$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemThrowingDagger" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractEntityThrowingDagger, $AbstractEntityThrowingDagger$Type} from "packages/wayoftime/bloodmagic/entity/projectile/$AbstractEntityThrowingDagger"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemThrowingDagger extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDagger"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): $AbstractEntityThrowingDagger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemThrowingDagger$Type = ($ItemThrowingDagger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemThrowingDagger_ = $ItemThrowingDagger$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/type/$SpectralBlockType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $SpectralBlockType extends $Enum<($SpectralBlockType)> implements $StringRepresentable {
static readonly "SOLID": $SpectralBlockType
static readonly "LEAKING": $SpectralBlockType


public "toString"(): string
public static "values"(): ($SpectralBlockType)[]
public static "valueOf"(arg0: string): $SpectralBlockType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectralBlockType$Type = (("solid") | ("leaking")) | ($SpectralBlockType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpectralBlockType_ = $SpectralBlockType$Type;
}}
declare module "packages/wayoftime/bloodmagic/block/enums/$BloodRuneType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $BloodRuneType extends $Enum<($BloodRuneType)> implements $StringRepresentable {
static readonly "BLANK": $BloodRuneType
static readonly "SPEED": $BloodRuneType
static readonly "EFFICIENCY": $BloodRuneType
static readonly "SACRIFICE": $BloodRuneType
static readonly "SELF_SACRIFICE": $BloodRuneType
static readonly "DISPLACEMENT": $BloodRuneType
static readonly "CAPACITY": $BloodRuneType
static readonly "AUGMENTED_CAPACITY": $BloodRuneType
static readonly "ORB": $BloodRuneType
static readonly "ACCELERATION": $BloodRuneType
static readonly "CHARGING": $BloodRuneType


public "toString"(): string
public static "values"(): ($BloodRuneType)[]
public static "valueOf"(arg0: string): $BloodRuneType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodRuneType$Type = (("acceleration") | ("efficiency") | ("blank") | ("self_sacrifice") | ("charging") | ("sacrifice") | ("displacement") | ("speed") | ("orb") | ("capacity") | ("augmented_capacity")) | ($BloodRuneType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloodRuneType_ = $BloodRuneType$Type;
}}
declare module "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionFlaskTransform" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EffectHolder, $EffectHolder$Type} from "packages/wayoftime/bloodmagic/recipe/$EffectHolder"
import {$RecipePotionFlaskBase, $RecipePotionFlaskBase$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionFlaskBase"

export class $RecipePotionFlaskTransform extends $RecipePotionFlaskBase {
 "output": $ItemStack
static readonly "MAX_INPUTS": integer

constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: integer, arg4: integer, arg5: integer)

public "write"(arg0: $FriendlyByteBuf$Type): void
public "getPriority"(arg0: $List$Type<($EffectHolder$Type)>): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "getOutput"(arg0: $ItemStack$Type, arg1: $List$Type<($EffectHolder$Type)>): $ItemStack
public "getExampleEffectList"(): $List<($EffectHolder)>
public "canModifyFlask"(arg0: $ItemStack$Type, arg1: $List$Type<($EffectHolder$Type)>): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "exampleEffectList"(): $List<($EffectHolder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipePotionFlaskTransform$Type = ($RecipePotionFlaskTransform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipePotionFlaskTransform_ = $RecipePotionFlaskTransform$Type;
}}
declare module "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionFlaskBase" {
import {$BloodMagicRecipe, $BloodMagicRecipe$Type} from "packages/wayoftime/bloodmagic/recipe/$BloodMagicRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EffectHolder, $EffectHolder$Type} from "packages/wayoftime/bloodmagic/recipe/$EffectHolder"

export class $RecipePotionFlaskBase extends $BloodMagicRecipe {
static readonly "MAX_INPUTS": integer

constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: integer, arg3: integer, arg4: integer)

public "getInput"(): $List<($Ingredient)>
public "write"(arg0: $FriendlyByteBuf$Type): void
public "getPriority"(arg0: $List$Type<($EffectHolder$Type)>): integer
public "getOutput"(arg0: $ItemStack$Type, arg1: $List$Type<($EffectHolder$Type)>): $ItemStack
public "getTicks"(): integer
public "getExamplePotionFlask"(): $ItemStack
public "getExampleEffectList"(): $List<($EffectHolder)>
public "canModifyFlask"(arg0: $ItemStack$Type, arg1: $List$Type<($EffectHolder$Type)>): boolean
public "getMinimumTier"(): integer
public "getSyphon"(): integer
get "input"(): $List<($Ingredient)>
get "ticks"(): integer
get "examplePotionFlask"(): $ItemStack
get "exampleEffectList"(): $List<($EffectHolder)>
get "minimumTier"(): integer
get "syphon"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipePotionFlaskBase$Type = ($RecipePotionFlaskBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipePotionFlaskBase_ = $RecipePotionFlaskBase$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/inventory/$ItemInventory" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
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

export class $ItemInventory implements $Container {

constructor(arg0: $ItemStack$Type, arg1: integer, arg2: string)

public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "clearContent"(): void
public "isEmpty"(): boolean
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getMaxStackSize"(): integer
public "startOpen"(arg0: $Player$Type): void
public "stillValid"(arg0: $Player$Type): boolean
public "stopOpen"(arg0: $Player$Type): void
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "setChanged"(): void
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "writeToStack"(arg0: $ItemStack$Type): void
public "readFromStack"(arg0: $ItemStack$Type): void
public "initializeInventory"(arg0: $ItemStack$Type): void
public "canInventoryBeManipulated"(): boolean
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $Container
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public "countItem"(arg0: $Item$Type): integer
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
get "maxStackSize"(): integer
get "containerSize"(): integer
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
export type $ItemInventory$Type = ($ItemInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInventory_ = $ItemInventory$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$AlchemyTableRecipeSerializer$IFactory" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RecipeAlchemyTable, $RecipeAlchemyTable$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeAlchemyTable"

export interface $AlchemyTableRecipeSerializer$IFactory<RECIPE extends $RecipeAlchemyTable> {

 "create"(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: integer, arg4: integer, arg5: integer): RECIPE

(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: integer, arg4: integer, arg5: integer): RECIPE
}

export namespace $AlchemyTableRecipeSerializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyTableRecipeSerializer$IFactory$Type<RECIPE> = ($AlchemyTableRecipeSerializer$IFactory<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyTableRecipeSerializer$IFactory_<RECIPE> = $AlchemyTableRecipeSerializer$IFactory$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/recipe/$RecipeAlchemyArray" {
import {$BloodMagicRecipe, $BloodMagicRecipe$Type} from "packages/wayoftime/bloodmagic/recipe/$BloodMagicRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RecipeAlchemyArray extends $BloodMagicRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: $Ingredient$Type, arg3: $Ingredient$Type, arg4: $ItemStack$Type)

public "write"(arg0: $FriendlyByteBuf$Type): void
public "getTexture"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<($RecipeAlchemyArray)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getOutput"(): $ItemStack
public "getBaseInput"(): $Ingredient
public "getAddedInput"(): $Ingredient
public "getId"(): $ResourceLocation
get "texture"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<($RecipeAlchemyArray)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "output"(): $ItemStack
get "baseInput"(): $Ingredient
get "addedInput"(): $Ingredient
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeAlchemyArray$Type = ($RecipeAlchemyArray);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeAlchemyArray_ = $RecipeAlchemyArray$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/potion/$ItemAlchemyFlaskLingering" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EntityPotionFlask, $EntityPotionFlask$Type} from "packages/wayoftime/bloodmagic/entity/projectile/$EntityPotionFlask"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemAlchemyFlaskThrowable, $ItemAlchemyFlaskThrowable$Type} from "packages/wayoftime/bloodmagic/common/item/potion/$ItemAlchemyFlaskThrowable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemAlchemyFlaskLingering extends $ItemAlchemyFlaskThrowable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getDurationModifier"(arg0: $ItemStack$Type): double
public "prepPotionFlask"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EntityPotionFlask$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAlchemyFlaskLingering$Type = ($ItemAlchemyFlaskLingering);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAlchemyFlaskLingering_ = $ItemAlchemyFlaskLingering$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$AlchemyArrayRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$AlchemyArrayRecipeSerializer$IFactory, $AlchemyArrayRecipeSerializer$IFactory$Type} from "packages/wayoftime/bloodmagic/common/recipe/serializer/$AlchemyArrayRecipeSerializer$IFactory"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeAlchemyArray, $RecipeAlchemyArray$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeAlchemyArray"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $AlchemyArrayRecipeSerializer<RECIPE extends $RecipeAlchemyArray> implements $RecipeSerializer<(RECIPE)> {

constructor(arg0: $AlchemyArrayRecipeSerializer$IFactory$Type<(RECIPE)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): RECIPE
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): RECIPE
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: RECIPE): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): RECIPE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyArrayRecipeSerializer$Type<RECIPE> = ($AlchemyArrayRecipeSerializer<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyArrayRecipeSerializer_<RECIPE> = $AlchemyArrayRecipeSerializer$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/item/routing/$ItemNodeRouter" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$INodeRenderer, $INodeRenderer$Type} from "packages/wayoftime/bloodmagic/common/routing/$INodeRenderer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemNodeRouter extends $Item implements $INodeRenderer {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getBlockPos"(arg0: $ItemStack$Type): $BlockPos
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "setBlockPos"(arg0: $ItemStack$Type, arg1: $BlockPos$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemNodeRouter$Type = ($ItemNodeRouter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemNodeRouter_ = $ItemNodeRouter$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockVeinMineCharge" {
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockShapedExplosive, $BlockShapedExplosive$Type} from "packages/wayoftime/bloodmagic/common/block/$BlockShapedExplosive"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockVeinMineCharge extends $BlockShapedExplosive {
static readonly "ATTACHED": $EnumProperty<($Direction)>
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

constructor(arg0: integer, arg1: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockVeinMineCharge$Type = ($BlockVeinMineCharge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockVeinMineCharge_ = $BlockVeinMineCharge$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockNetherrackSoil" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $BlockNetherrackSoil extends $Block {
static readonly "MOISTURE": $IntegerProperty
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

public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $Random$Type): void
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $Random$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public static "turnToDirt"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockNetherrackSoil$Type = ($BlockNetherrackSoil);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockNetherrackSoil_ = $BlockNetherrackSoil$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/registration/$INamedEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $INamedEntry {

 "getInternalRegistryName"(): string

(): string
}

export namespace $INamedEntry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INamedEntry$Type = ($INamedEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INamedEntry_ = $INamedEntry$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionFillRecipeSerializer$IFactory" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipePotionFill, $RecipePotionFill$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionFill"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $PotionFillRecipeSerializer$IFactory<RECIPE extends $RecipePotionFill> {

 "create"(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: integer, arg3: integer, arg4: integer, arg5: integer): RECIPE

(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: integer, arg3: integer, arg4: integer, arg5: integer): RECIPE
}

export namespace $PotionFillRecipeSerializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionFillRecipeSerializer$IFactory$Type<RECIPE> = ($PotionFillRecipeSerializer$IFactory<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionFillRecipeSerializer$IFactory_<RECIPE> = $PotionFillRecipeSerializer$IFactory$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/api/compat/$IDemonWillWeapon" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IDemonWillWeapon {

 "getRandomDemonWillDrop"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): $List<($ItemStack)>

(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): $List<($ItemStack)>
}

export namespace $IDemonWillWeapon {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDemonWillWeapon$Type = ($IDemonWillWeapon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDemonWillWeapon_ = $IDemonWillWeapon$Type;
}}
declare module "packages/wayoftime/bloodmagic/recipe/$RecipeMeteor" {
import {$BloodMagicRecipe, $BloodMagicRecipe$Type} from "packages/wayoftime/bloodmagic/recipe/$BloodMagicRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MeteorLayer, $MeteorLayer$Type} from "packages/wayoftime/bloodmagic/common/meteor/$MeteorLayer"

export class $RecipeMeteor extends $BloodMagicRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: integer, arg3: float, arg4: $List$Type<($MeteorLayer$Type)>)

public "getInput"(): $Ingredient
public "write"(arg0: $FriendlyByteBuf$Type): void
public "getSerializer"(): $RecipeSerializer<(any)>
public "spawnMeteorInWorld"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getSyphon"(): integer
get "input"(): $Ingredient
get "serializer"(): $RecipeSerializer<(any)>
get "syphon"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeMeteor$Type = ($RecipeMeteor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeMeteor_ = $RecipeMeteor$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$IBindable" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Binding, $Binding$Type} from "packages/wayoftime/bloodmagic/core/data/$Binding"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IBindable {

 "getBinding"(arg0: $ItemStack$Type): $Binding
 "onBind"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
}

export namespace $IBindable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBindable$Type = ($IBindable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBindable_ = $IBindable$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$IBloodOrb" {
import {$BloodOrb, $BloodOrb$Type} from "packages/wayoftime/bloodmagic/common/item/$BloodOrb"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IBloodOrb {

 "getOrb"(arg0: $ItemStack$Type): $BloodOrb

(arg0: $ItemStack$Type): $BloodOrb
}

export namespace $IBloodOrb {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBloodOrb$Type = ($IBloodOrb);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBloodOrb_ = $IBloodOrb$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionFlaskTransformRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$PotionFlaskTransformRecipeSerializer$IFactory, $PotionFlaskTransformRecipeSerializer$IFactory$Type} from "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionFlaskTransformRecipeSerializer$IFactory"
import {$RecipePotionFlaskTransform, $RecipePotionFlaskTransform$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionFlaskTransform"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $PotionFlaskTransformRecipeSerializer<RECIPE extends $RecipePotionFlaskTransform> implements $RecipeSerializer<(RECIPE)> {

constructor(arg0: $PotionFlaskTransformRecipeSerializer$IFactory$Type<(RECIPE)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): RECIPE
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): RECIPE
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: RECIPE): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): RECIPE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionFlaskTransformRecipeSerializer$Type<RECIPE> = ($PotionFlaskTransformRecipeSerializer<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionFlaskTransformRecipeSerializer_<RECIPE> = $PotionFlaskTransformRecipeSerializer$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilToggleableBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemSigilToggleable, $ItemSigilToggleable$Type} from "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilToggleable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSigilToggleableBase extends $ItemSigilToggleable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: string, arg1: integer)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSigilToggleableBase$Type = ($ItemSigilToggleableBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSigilToggleableBase_ = $ItemSigilToggleableBase$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemRitualDiviner" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Ritual, $Ritual$Type} from "packages/wayoftime/bloodmagic/ritual/$Ritual"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EnumRuneType, $EnumRuneType$Type} from "packages/wayoftime/bloodmagic/ritual/$EnumRuneType"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemRitualDiviner extends $Item {
static readonly "tooltipBase": string
static "names": (string)[]
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: integer)

public "getDirection"(arg0: $ItemStack$Type): $Direction
public "cycleDirection"(arg0: $ItemStack$Type, arg1: $Player$Type): void
public static "spawnParticles"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer): void
public "setDirection"(arg0: $ItemStack$Type, arg1: $Direction$Type): void
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "trySetDisplayedRitual"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "canDivinerPerformRitual"(arg0: $ItemStack$Type, arg1: $Ritual$Type): boolean
public "canPlaceRitualStone"(arg0: $EnumRuneType$Type, arg1: $ItemStack$Type): boolean
public "notifyDirectionChange"(arg0: $Direction$Type, arg1: $Player$Type): void
public "getCurrentRitual"(arg0: $ItemStack$Type): string
public "undisplayHologram"(): void
public "consumeStone"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): boolean
public "notifyBlockedBuild"(arg0: $Player$Type, arg1: $BlockPos$Type): void
public "addRuneToRitual"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "cycleRitual"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: boolean): void
public "notifyRitualChange"(arg0: string, arg1: $Player$Type): void
public "setCurrentRitual"(arg0: $ItemStack$Type, arg1: string): void
public "getStoredPos"(arg0: $ItemStack$Type): $BlockPos
public "setStoredPos"(arg0: $ItemStack$Type, arg1: $BlockPos$Type): void
public "getActivated"(arg0: $ItemStack$Type): boolean
public "setActivatedState"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRitualDiviner$Type = ($ItemRitualDiviner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRitualDiviner_ = $ItemRitualDiviner$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/registration/impl/$RecipeTypeRegistryObject" {
import {$BloodMagicRecipe, $BloodMagicRecipe$Type} from "packages/wayoftime/bloodmagic/recipe/$BloodMagicRecipe"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$WrappedRegistryObject, $WrappedRegistryObject$Type} from "packages/wayoftime/bloodmagic/common/registration/$WrappedRegistryObject"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $RecipeTypeRegistryObject<RECIPE extends $BloodMagicRecipe> extends $WrappedRegistryObject<($RecipeType<(RECIPE)>)> {

constructor(arg0: $RegistryObject$Type<($RecipeType$Type<(RECIPE)>)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeTypeRegistryObject$Type<RECIPE> = ($RecipeTypeRegistryObject<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeTypeRegistryObject_<RECIPE> = $RecipeTypeRegistryObject$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$TartaricForgeRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeTartaricForge, $RecipeTartaricForge$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeTartaricForge"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TartaricForgeRecipeSerializer$IFactory, $TartaricForgeRecipeSerializer$IFactory$Type} from "packages/wayoftime/bloodmagic/common/recipe/serializer/$TartaricForgeRecipeSerializer$IFactory"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $TartaricForgeRecipeSerializer<RECIPE extends $RecipeTartaricForge> implements $RecipeSerializer<(RECIPE)> {

constructor(arg0: $TartaricForgeRecipeSerializer$IFactory$Type<(RECIPE)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): RECIPE
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): RECIPE
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: RECIPE): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): RECIPE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TartaricForgeRecipeSerializer$Type<RECIPE> = ($TartaricForgeRecipeSerializer<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TartaricForgeRecipeSerializer_<RECIPE> = $TartaricForgeRecipeSerializer$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/api/compat/$IIncensePath" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IIncensePath {

 "getLevelOfPath"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): integer

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): integer
}

export namespace $IIncensePath {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIncensePath$Type = ($IIncensePath);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIncensePath_ = $IIncensePath$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$ARCRecipeSerializer$IFactory" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$RecipeARC, $RecipeARC$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeARC"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidStackIngredient, $FluidStackIngredient$Type} from "packages/wayoftime/bloodmagic/recipe/helper/$FluidStackIngredient"

export interface $ARCRecipeSerializer$IFactory<RECIPE extends $RecipeARC> {

 "create"(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: integer, arg3: $Ingredient$Type, arg4: $FluidStackIngredient$Type, arg5: $ItemStack$Type, arg6: $List$Type<($Pair$Type<($ItemStack$Type), ($Pair$Type<(double), (double)>)>)>, arg7: $FluidStack$Type, arg8: boolean): RECIPE

(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: integer, arg3: $Ingredient$Type, arg4: $FluidStackIngredient$Type, arg5: $ItemStack$Type, arg6: $List$Type<($Pair$Type<($ItemStack$Type), ($Pair$Type<(double), (double)>)>)>, arg7: $FluidStack$Type, arg8: boolean): RECIPE
}

export namespace $ARCRecipeSerializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ARCRecipeSerializer$IFactory$Type<RECIPE> = ($ARCRecipeSerializer$IFactory<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ARCRecipeSerializer$IFactory_<RECIPE> = $ARCRecipeSerializer$IFactory$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemDemonWillGauge" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IDemonWillViewer, $IDemonWillViewer$Type} from "packages/wayoftime/bloodmagic/api/compat/$IDemonWillViewer"

export class $ItemDemonWillGauge extends $Item implements $IDemonWillViewer {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canSeeDemonWillAura"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type): boolean
public "getDemonWillAuraResolution"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDemonWillGauge$Type = ($ItemDemonWillGauge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDemonWillGauge_ = $ItemDemonWillGauge$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockTau" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$CropBlock, $CropBlock$Type} from "packages/net/minecraft/world/level/block/$CropBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockTau extends $CropBlock {
readonly "isStrong": boolean
static readonly "TRANSFORM_CHANCE": double
static readonly "MAX_AGE": integer
static readonly "AGE": $IntegerProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: boolean)

public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $Random$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "growCrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "isValidBonemealTarget"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "isBonemealSuccess"(arg0: $Level$Type, arg1: $Random$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTau$Type = ($BlockTau);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTau_ = $BlockTau$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$PotionIncreasePotencyRecipeSerializer$IFactory" {
import {$RecipePotionIncreasePotency, $RecipePotionIncreasePotency$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionIncreasePotency"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export interface $PotionIncreasePotencyRecipeSerializer$IFactory<RECIPE extends $RecipePotionIncreasePotency> {

 "create"(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $MobEffect$Type, arg3: integer, arg4: double, arg5: integer, arg6: integer, arg7: integer): RECIPE

(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $MobEffect$Type, arg3: integer, arg4: double, arg5: integer, arg6: integer, arg7: integer): RECIPE
}

export namespace $PotionIncreasePotencyRecipeSerializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionIncreasePotencyRecipeSerializer$IFactory$Type<RECIPE> = ($PotionIncreasePotencyRecipeSerializer$IFactory<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionIncreasePotencyRecipeSerializer$IFactory_<RECIPE> = $PotionIncreasePotencyRecipeSerializer$IFactory$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilHolding" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ItemSigilBase, $ItemSigilBase$Type} from "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilBase"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IAltarReader, $IAltarReader$Type} from "packages/wayoftime/bloodmagic/api/compat/$IAltarReader"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IKeybindable, $IKeybindable$Type} from "packages/wayoftime/bloodmagic/client/key/$IKeybindable"
import {$KeyBindings, $KeyBindings$Type} from "packages/wayoftime/bloodmagic/client/key/$KeyBindings"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$ISigil$Holding, $ISigil$Holding$Type} from "packages/wayoftime/bloodmagic/common/item/sigil/$ISigil$Holding"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSigilHolding extends $ItemSigilBase implements $IKeybindable, $IAltarReader, $ISigil$Holding, $MenuProvider {
static readonly "inventorySize": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public static "next"(arg0: integer): integer
public static "prev"(arg0: integer): integer
public static "getInternalInventory"(arg0: $ItemStack$Type): $NonNullList<($ItemStack)>
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "getHeldItem"(arg0: $ItemStack$Type, arg1: $Player$Type): $ItemStack
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDisplayName"(): $Component
public "tickInternalInventory"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public static "getCurrentItemOrdinal"(arg0: $ItemStack$Type): integer
public "saveInventory"(arg0: $ItemStack$Type, arg1: $NonNullList$Type<($ItemStack$Type)>): void
public static "getItemStackInSlot"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
public static "cycleToNextSigil"(arg0: $ItemStack$Type, arg1: integer): void
public "onKeyPressed"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $KeyBindings$Type, arg3: boolean): void
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSigilHolding$Type = ($ItemSigilHolding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSigilHolding_ = $ItemSigilHolding$Type;
}}
declare module "packages/wayoftime/bloodmagic/ritual/$RitualComponent" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EnumRuneType, $EnumRuneType$Type} from "packages/wayoftime/bloodmagic/ritual/$EnumRuneType"

export class $RitualComponent {

constructor(arg0: $BlockPos$Type, arg1: $EnumRuneType$Type)

public "getY"(): integer
public "getOffset"(): $BlockPos
public "getOffset"(arg0: $Direction$Type): $BlockPos
public "getX"(arg0: $Direction$Type): integer
public "getZ"(arg0: $Direction$Type): integer
public "getRuneType"(): $EnumRuneType
get "y"(): integer
get "offset"(): $BlockPos
get "runeType"(): $EnumRuneType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualComponent$Type = ($RitualComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualComponent_ = $RitualComponent$Type;
}}
declare module "packages/wayoftime/bloodmagic/ritual/$RitualRenderer" {
import {$IMasterRitualStone, $IMasterRitualStone$Type} from "packages/wayoftime/bloodmagic/ritual/$IMasterRitualStone"

export class $RitualRenderer {

constructor()

public "renderAt"(arg0: $IMasterRitualStone$Type, arg1: double, arg2: double, arg3: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualRenderer$Type = ($RitualRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualRenderer_ = $RitualRenderer$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockFungalCharge" {
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockShapedExplosive, $BlockShapedExplosive$Type} from "packages/wayoftime/bloodmagic/common/block/$BlockShapedExplosive"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockFungalCharge extends $BlockShapedExplosive {
static readonly "ATTACHED": $EnumProperty<($Direction)>
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

constructor(arg0: integer, arg1: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFungalCharge$Type = ($BlockFungalCharge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFungalCharge_ = $BlockFungalCharge$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/routing/$IItemFilterProvider" {
import {$IItemFilter, $IItemFilter$Type} from "packages/wayoftime/bloodmagic/common/routing/$IItemFilter"
import {$ContainerFilter, $ContainerFilter$Type} from "packages/wayoftime/bloodmagic/common/container/item/$ContainerFilter"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IFilterKey, $IFilterKey$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$IFilterKey"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IRoutingFilterProvider, $IRoutingFilterProvider$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$IRoutingFilterProvider"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Button$OnPress, $Button$OnPress$Type} from "packages/net/minecraft/client/gui/components/$Button$OnPress"

export interface $IItemFilterProvider extends $IRoutingFilterProvider {

 "getFilterKey"(arg0: $ItemStack$Type, arg1: integer, arg2: $ItemStack$Type, arg3: integer): $IFilterKey
 "getInputItemFilter"(arg0: $ItemStack$Type, arg1: $BlockEntity$Type, arg2: $IItemHandler$Type): $IItemFilter
 "setGhostItemAmount"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): void
 "receiveButtonPress"(arg0: $ItemStack$Type, arg1: string, arg2: integer, arg3: integer): integer
 "isButtonGlobal"(arg0: $ItemStack$Type, arg1: string): boolean
 "getButtonAction"(arg0: $ContainerFilter$Type): $List<($Pair<(string), ($Button$OnPress)>)>
 "getCurrentButtonState"(arg0: $ItemStack$Type, arg1: string, arg2: integer): integer
 "getUninitializedItemFilter"(arg0: $ItemStack$Type): $IItemFilter
 "getTexturePositionForState"(arg0: $ItemStack$Type, arg1: string, arg2: integer): $Pair<(integer), (integer)>
 "getTextForHoverItem"(arg0: $ItemStack$Type, arg1: string, arg2: integer): $List<($Component)>
 "getOutputItemFilter"(arg0: $ItemStack$Type, arg1: $BlockEntity$Type, arg2: $IItemHandler$Type): $IItemFilter
 "getContainedStackForItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
}

export namespace $IItemFilterProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemFilterProvider$Type = ($IItemFilterProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemFilterProvider_ = $IItemFilterProvider$Type;
}}
declare module "packages/wayoftime/bloodmagic/recipe/$RecipeARCPotion" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$RecipeARC, $RecipeARC$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeARC"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidStackIngredient, $FluidStackIngredient$Type} from "packages/wayoftime/bloodmagic/recipe/helper/$FluidStackIngredient"

export class $RecipeARCPotion extends $RecipeARC {
static readonly "MAX_RANDOM_OUTPUTS": integer

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: integer, arg3: $Ingredient$Type, arg4: $FluidStackIngredient$Type, arg5: $ItemStack$Type, arg6: $List$Type<($Pair$Type<($ItemStack$Type), ($Pair$Type<(double), (double)>)>)>, arg7: $FluidStack$Type, arg8: boolean)

public "getSerializer"(): $RecipeSerializer<(any)>
public "getAllListedOutputs"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $List<($ItemStack)>
public "getAllOutputs"(arg0: $RandomSource$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: double): $List<($ItemStack)>
public "breakTool"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeARCPotion$Type = ($RecipeARCPotion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeARCPotion_ = $RecipeARCPotion$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemLavaCrystal" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemBindableBase, $ItemBindableBase$Type} from "packages/wayoftime/bloodmagic/common/item/$ItemBindableBase"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemLavaCrystal extends $ItemBindableBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "getBurnTime"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLavaCrystal$Type = ($ItemLavaCrystal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLavaCrystal_ = $ItemLavaCrystal$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/soul/$ItemSoulSnare" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSoulSnare extends $Item {
static "names": (string)[]
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSoulSnare$Type = ($ItemSoulSnare);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSoulSnare_ = $ItemSoulSnare$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/block/$ItemBlockAlchemyTable" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBlockAlchemyTable extends $BlockItem {
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

public "place"(arg0: $BlockPlaceContext$Type): $InteractionResult
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlockAlchemyTable$Type = ($ItemBlockAlchemyTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockAlchemyTable_ = $ItemBlockAlchemyTable$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockSpecialDungeonSeal" {
import {$BlockDungeonSeal, $BlockDungeonSeal$Type} from "packages/wayoftime/bloodmagic/common/block/$BlockDungeonSeal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$SpecialSealType, $SpecialSealType$Type} from "packages/wayoftime/bloodmagic/common/block/type/$SpecialSealType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockSpecialDungeonSeal extends $BlockDungeonSeal {
static readonly "SEAL": $EnumProperty<($SpecialSealType)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSpecialDungeonSeal$Type = ($BlockSpecialDungeonSeal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSpecialDungeonSeal_ = $BlockSpecialDungeonSeal$Type;
}}
declare module "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionFill" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EffectHolder, $EffectHolder$Type} from "packages/wayoftime/bloodmagic/recipe/$EffectHolder"
import {$RecipePotionFlaskBase, $RecipePotionFlaskBase$Type} from "packages/wayoftime/bloodmagic/recipe/flask/$RecipePotionFlaskBase"

export class $RecipePotionFill extends $RecipePotionFlaskBase {
 "maxEffects": integer
static readonly "MAX_INPUTS": integer

constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: integer, arg3: integer, arg4: integer, arg5: integer)

public "write"(arg0: $FriendlyByteBuf$Type): void
public "getPriority"(arg0: $List$Type<($EffectHolder$Type)>): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "getOutput"(arg0: $ItemStack$Type, arg1: $List$Type<($EffectHolder$Type)>): $ItemStack
public "getExamplePotionFlask"(): $ItemStack
public "getExampleEffectList"(): $List<($EffectHolder)>
public "canModifyFlask"(arg0: $ItemStack$Type, arg1: $List$Type<($EffectHolder$Type)>): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "examplePotionFlask"(): $ItemStack
get "exampleEffectList"(): $List<($EffectHolder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipePotionFill$Type = ($RecipePotionFill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipePotionFill_ = $RecipePotionFill$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/potion/$ItemAlchemyFlaskThrowable" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemAlchemyFlask, $ItemAlchemyFlask$Type} from "packages/wayoftime/bloodmagic/common/item/potion/$ItemAlchemyFlask"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EntityPotionFlask, $EntityPotionFlask$Type} from "packages/wayoftime/bloodmagic/entity/projectile/$EntityPotionFlask"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemAlchemyFlaskThrowable extends $ItemAlchemyFlask {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "resyncEffectInstances"(arg0: $ItemStack$Type): void
public "getDurationModifier"(arg0: $ItemStack$Type): double
public "prepPotionFlask"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EntityPotionFlask$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAlchemyFlaskThrowable$Type = ($ItemAlchemyFlaskThrowable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAlchemyFlaskThrowable_ = $ItemAlchemyFlaskThrowable$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemExperienceBook" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemExperienceBook extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public static "addPlayerXP"(arg0: $Player$Type, arg1: integer): void
public static "getPlayerXP"(arg0: $Player$Type): integer
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public static "getExperienceForNextLevel"(arg0: integer): integer
public "giveOneLevelExpToPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): void
public static "setStoredExperience"(arg0: $ItemStack$Type, arg1: double): void
public "absorbOneLevelExpFromPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): void
public static "getExperienceAcquiredToNext"(arg0: $Player$Type): double
public static "getStoredExperience"(arg0: $ItemStack$Type): double
public static "getLevelForExperience"(arg0: double): integer
public static "getExperienceForLevel"(arg0: integer): integer
public static "addExperience"(arg0: $ItemStack$Type, arg1: double): void
public static "solveParabola"(arg0: double, arg1: double, arg2: double): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemExperienceBook$Type = ($ItemExperienceBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemExperienceBook_ = $ItemExperienceBook$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemBowAnointmentProvider" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemAnointmentProvider, $ItemAnointmentProvider$Type} from "packages/wayoftime/bloodmagic/common/item/$ItemAnointmentProvider"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBowAnointmentProvider extends $ItemAnointmentProvider {
 "anointRL": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean)

public "isItemValidForApplication"(arg0: $ItemStack$Type): boolean
public static "isItemBow"(arg0: $ItemStack$Type): boolean
public static "isItemCrossbow"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBowAnointmentProvider$Type = ($ItemBowAnointmentProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBowAnointmentProvider_ = $ItemBowAnointmentProvider$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/soul/$ItemSentientSword" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDemonWillWeapon, $IDemonWillWeapon$Type} from "packages/wayoftime/bloodmagic/api/compat/$IDemonWillWeapon"
import {$IMultiWillTool, $IMultiWillTool$Type} from "packages/wayoftime/bloodmagic/api/compat/$IMultiWillTool"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemSentientSword extends $SwordItem implements $IDemonWillWeapon, $IMultiWillTool {
static "soulBracket": (integer)[]
static "defaultDamageAdded": (double)[]
static "destructiveDamageAdded": (double)[]
static "vengefulDamageAdded": (double)[]
static "steadfastDamageAdded": (double)[]
static "soulDrainPerSwing": (double)[]
static "soulDrop": (double)[]
static "staticDrop": (double)[]
static "healthBonus": (double)[]
static "vengefulAttackSpeed": (double)[]
static "destructiveAttackSpeed": (double)[]
static "absorptionTime": (integer)[]
static "maxAbsorptionHearts": double
static "poisonTime": (integer)[]
static "poisonLevel": (integer)[]
static "movementSpeed": (double)[]
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "getMovementSpeed"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "getRandomDemonWillDrop"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): $List<($ItemStack)>
public "getDropOfActivatedSword"(arg0: $ItemStack$Type): double
public "setDamageOfActivatedSword"(arg0: $ItemStack$Type, arg1: double): void
public "setAttackSpeedOfSword"(arg0: $ItemStack$Type, arg1: double): void
public "getDamageOfActivatedSword"(arg0: $ItemStack$Type): double
public "setDropOfActivatedSword"(arg0: $ItemStack$Type, arg1: double): void
public "applyEffectToEntity"(arg0: $EnumDemonWillType$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $LivingEntity$Type): void
public "setHealthBonusOfSword"(arg0: $ItemStack$Type, arg1: double): void
public "getStaticDropOfActivatedSword"(arg0: $ItemStack$Type): double
public "getAttackSpeedOfSword"(arg0: $ItemStack$Type): double
public "getHealthBonusOfSword"(arg0: $ItemStack$Type): double
public "setStaticDropOfActivatedSword"(arg0: $ItemStack$Type, arg1: double): void
public "setDrainOfActivatedSword"(arg0: $ItemStack$Type, arg1: double): void
public "getDrainOfActivatedSword"(arg0: $ItemStack$Type): double
public "getHealthBonus"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "getExtraDamage"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "recalculatePowers"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "recalculatePowers"(arg0: $ItemStack$Type, arg1: $EnumDemonWillType$Type, arg2: double): void
public "setCurrentType"(arg0: $ItemStack$Type, arg1: $EnumDemonWillType$Type): void
public "setSpeedOfSword"(arg0: $ItemStack$Type, arg1: double): void
public "getSpeedOfSword"(arg0: $ItemStack$Type): double
public "getAttackSpeed"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "getCurrentType"(arg0: $ItemStack$Type): $EnumDemonWillType
public "getActivated"(arg0: $ItemStack$Type): boolean
public "setActivatedState"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSentientSword$Type = ($ItemSentientSword);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSentientSword_ = $ItemSentientSword$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockAlchemyTable" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
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
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockAlchemyTable extends $Block implements $EntityBlock {
static readonly "DIRECTION": $DirectionProperty
static readonly "INVISIBLE": $BooleanProperty
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
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "asItem"(): $Item
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAlchemyTable$Type = ($BlockAlchemyTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAlchemyTable_ = $BlockAlchemyTable$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilLava" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IAlchemyItem, $IAlchemyItem$Type} from "packages/wayoftime/bloodmagic/common/item/$IAlchemyItem"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemSigilFluidBase, $ItemSigilFluidBase$Type} from "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilFluidBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSigilLava extends $ItemSigilFluidBase implements $IAlchemyItem {
readonly "sigilFluid": $FluidStack
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isStackChangedOnUse"(arg0: $ItemStack$Type): boolean
public "onConsumeInput"(arg0: $ItemStack$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSigilLava$Type = ($ItemSigilLava);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSigilLava_ = $ItemSigilLava$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BloodstoneBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BloodstoneBlock extends $Block {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodstoneBlock$Type = ($BloodstoneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloodstoneBlock_ = $BloodstoneBlock$Type;
}}
declare module "packages/wayoftime/bloodmagic/api/compat/$IDemonWillViewer" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IDemonWillViewer {

 "canSeeDemonWillAura"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type): boolean
 "getDemonWillAuraResolution"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type): integer
}

export namespace $IDemonWillViewer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDemonWillViewer$Type = ($IDemonWillViewer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDemonWillViewer_ = $IDemonWillViewer$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockBloodLight" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockBloodLight extends $Block {
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
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBloodLight$Type = ($BlockBloodLight);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBloodLight_ = $BlockBloodLight$Type;
}}
declare module "packages/wayoftime/bloodmagic/recipe/$RecipeLivingDowngrade" {
import {$BloodMagicRecipe, $BloodMagicRecipe$Type} from "packages/wayoftime/bloodmagic/recipe/$BloodMagicRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RecipeLivingDowngrade extends $BloodMagicRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ResourceLocation$Type)

public "getInput"(): $Ingredient
public "write"(arg0: $FriendlyByteBuf$Type): void
public "getSerializer"(): $RecipeSerializer<($RecipeLivingDowngrade)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getLivingArmourResource"(): $ResourceLocation
get "input"(): $Ingredient
get "serializer"(): $RecipeSerializer<($RecipeLivingDowngrade)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "livingArmourResource"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeLivingDowngrade$Type = ($RecipeLivingDowngrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeLivingDowngrade_ = $RecipeLivingDowngrade$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/container/item/$ContainerFilter" {
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$InventoryFilter, $InventoryFilter$Type} from "packages/wayoftime/bloodmagic/common/item/inventory/$InventoryFilter"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $ContainerFilter extends $AbstractContainerMenu {
readonly "inventoryFilter": $InventoryFilter
readonly "player": $Player
readonly "filterStack": $ItemStack
 "lastGhostSlotClicked": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "stateId": integer
 "containerId": integer
readonly "containerListeners": $List<($ContainerListener)>

constructor(arg0: integer, arg1: $Inventory$Type, arg2: $FriendlyByteBuf$Type)
constructor(arg0: integer, arg1: $Player$Type, arg2: $Inventory$Type, arg3: $ItemStack$Type)

public "setup"(arg0: $Inventory$Type, arg1: integer): void
public "stillValid"(arg0: $Player$Type): boolean
public "quickMoveStack"(arg0: $Player$Type, arg1: integer): $ItemStack
public "clicked"(arg0: integer, arg1: integer, arg2: $ClickType$Type, arg3: $Player$Type): void
public "broadcastChanges"(): void
public "removed"(arg0: $Player$Type): void
public "saveInventory"(arg0: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerFilter$Type = ($ContainerFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerFilter_ = $ContainerFilter$Type;
}}
declare module "packages/wayoftime/bloodmagic/api/compat/$IDemonWillGem" {
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IDemonWillGem {

 "getWill"(arg0: $EnumDemonWillType$Type, arg1: $ItemStack$Type): double
 "drainWill"(arg0: $EnumDemonWillType$Type, arg1: $ItemStack$Type, arg2: double, arg3: boolean): double
 "setWill"(arg0: $EnumDemonWillType$Type, arg1: $ItemStack$Type, arg2: double): void
 "getMaxWill"(arg0: $EnumDemonWillType$Type, arg1: $ItemStack$Type): integer
 "fillWill"(arg0: $EnumDemonWillType$Type, arg1: $ItemStack$Type, arg2: double, arg3: boolean): double
 "fillDemonWillGem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
}

export namespace $IDemonWillGem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDemonWillGem$Type = ($IDemonWillGem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDemonWillGem_ = $IDemonWillGem$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemTippedThrowingDagger" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemThrowingDagger, $ItemThrowingDagger$Type} from "packages/wayoftime/bloodmagic/common/item/$ItemThrowingDagger"
import {$AbstractEntityThrowingDagger, $AbstractEntityThrowingDagger$Type} from "packages/wayoftime/bloodmagic/entity/projectile/$AbstractEntityThrowingDagger"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemTippedThrowingDagger extends $ItemThrowingDagger {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDagger"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): $AbstractEntityThrowingDagger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTippedThrowingDagger$Type = ($ItemTippedThrowingDagger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTippedThrowingDagger_ = $ItemTippedThrowingDagger$Type;
}}
declare module "packages/wayoftime/bloodmagic/potion/$PotionPassivity" {
import {$PotionBloodMagic, $PotionBloodMagic$Type} from "packages/wayoftime/bloodmagic/potion/$PotionBloodMagic"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $PotionPassivity extends $PotionBloodMagic {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionPassivity$Type = ($PotionPassivity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionPassivity_ = $PotionPassivity$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemInscriptionTool" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnumRuneType, $EnumRuneType$Type} from "packages/wayoftime/bloodmagic/ritual/$EnumRuneType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemInscriptionTool extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $EnumRuneType$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInscriptionTool$Type = ($ItemInscriptionTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInscriptionTool_ = $ItemInscriptionTool$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$BloodAltarRecipeSerializer$IFactory" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RecipeBloodAltar, $RecipeBloodAltar$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeBloodAltar"

export interface $BloodAltarRecipeSerializer$IFactory<RECIPE extends $RecipeBloodAltar> {

 "create"(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer): RECIPE

(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer): RECIPE
}

export namespace $BloodAltarRecipeSerializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodAltarRecipeSerializer$IFactory$Type<RECIPE> = ($BloodAltarRecipeSerializer$IFactory<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloodAltarRecipeSerializer$IFactory_<RECIPE> = $BloodAltarRecipeSerializer$IFactory$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemLivingArmor" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ILivingContainer, $ILivingContainer$Type} from "packages/wayoftime/bloodmagic/core/living/$ILivingContainer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$IForgeItem, $IForgeItem$Type} from "packages/net/minecraftforge/common/extensions/$IForgeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LivingStats, $LivingStats$Type} from "packages/wayoftime/bloodmagic/core/living/$LivingStats"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ExpandedArmor, $ExpandedArmor$Type} from "packages/wayoftime/bloodmagic/common/item/$ExpandedArmor"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemLivingArmor extends $ArmorItem implements $ILivingContainer, $ExpandedArmor, $IForgeItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "elytraFlightTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): boolean
public "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "canElytraFly"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "hasElytraUpgrade"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "damageArmor"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $DamageSource$Type, arg3: float, arg4: $EquipmentSlot$Type): void
public static "appendLivingTooltip"(arg0: $ItemStack$Type, arg1: $LivingStats$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
public static "setDisplayIfZero"(arg0: $ItemStack$Type, arg1: boolean): void
public "getLivingStats"(arg0: $ItemStack$Type): $LivingStats
public static "displayIfLevelZero"(arg0: $ItemStack$Type): boolean
public "updateLivingStats"(arg0: $ItemStack$Type, arg1: $LivingStats$Type): void
public "isRepairable"(arg0: $ItemStack$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLivingArmor$Type = ($ItemLivingArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLivingArmor_ = $ItemLivingArmor$Type;
}}
declare module "packages/wayoftime/bloodmagic/ritual/$IRitualStone" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EnumRuneType, $EnumRuneType$Type} from "packages/wayoftime/bloodmagic/ritual/$EnumRuneType"

export interface $IRitualStone {

 "setRuneType"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $EnumRuneType$Type): void
 "isRuneType"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $EnumRuneType$Type): boolean
}

export namespace $IRitualStone {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRitualStone$Type = ($IRitualStone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRitualStone_ = $IRitualStone$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/soul/$ItemSoulGem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IDemonWillGem, $IDemonWillGem$Type} from "packages/wayoftime/bloodmagic/api/compat/$IDemonWillGem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IMultiWillTool, $IMultiWillTool$Type} from "packages/wayoftime/bloodmagic/api/compat/$IMultiWillTool"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSoulGem extends $Item implements $IDemonWillGem, $IMultiWillTool {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: string, arg1: integer)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "setCurrentType"(arg0: $EnumDemonWillType$Type, arg1: $ItemStack$Type): void
public "getWill"(arg0: $EnumDemonWillType$Type, arg1: $ItemStack$Type): double
public "drainWill"(arg0: $EnumDemonWillType$Type, arg1: $ItemStack$Type, arg2: double, arg3: boolean): double
public "setWill"(arg0: $EnumDemonWillType$Type, arg1: $ItemStack$Type, arg2: double): void
public "getMaxWill"(arg0: $EnumDemonWillType$Type, arg1: $ItemStack$Type): integer
public "fillWill"(arg0: $EnumDemonWillType$Type, arg1: $ItemStack$Type, arg2: double, arg3: boolean): double
public "fillDemonWillGem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
public "getCurrentType"(arg0: $ItemStack$Type): $EnumDemonWillType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSoulGem$Type = ($ItemSoulGem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSoulGem_ = $ItemSoulGem$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemDaggerOfSacrifice" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDaggerOfSacrifice extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDaggerOfSacrifice$Type = ($ItemDaggerOfSacrifice);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDaggerOfSacrifice_ = $ItemDaggerOfSacrifice$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$FilterMergeAlchemyTableRecipeSerializer$IFactory" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$RecipeFilterMergeAlchemyTable, $RecipeFilterMergeAlchemyTable$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeFilterMergeAlchemyTable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $FilterMergeAlchemyTableRecipeSerializer$IFactory<RECIPE extends $RecipeFilterMergeAlchemyTable> {

 "create"(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $List$Type<($Ingredient$Type)>, arg3: $ItemStack$Type, arg4: integer, arg5: integer, arg6: integer): RECIPE

(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $List$Type<($Ingredient$Type)>, arg3: $ItemStack$Type, arg4: integer, arg5: integer, arg6: integer): RECIPE
}

export namespace $FilterMergeAlchemyTableRecipeSerializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterMergeAlchemyTableRecipeSerializer$IFactory$Type<RECIPE> = ($FilterMergeAlchemyTableRecipeSerializer$IFactory<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterMergeAlchemyTableRecipeSerializer$IFactory_<RECIPE> = $FilterMergeAlchemyTableRecipeSerializer$IFactory$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/api/compat/$IDiscreteDemonWill" {
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IDiscreteDemonWill {

 "getType"(arg0: $ItemStack$Type): $EnumDemonWillType
 "getWill"(arg0: $ItemStack$Type): double
 "getDiscretization"(arg0: $ItemStack$Type): double
 "drainWill"(arg0: $ItemStack$Type, arg1: double): double
}

export namespace $IDiscreteDemonWill {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDiscreteDemonWill$Type = ($IDiscreteDemonWill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDiscreteDemonWill_ = $IDiscreteDemonWill$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/routing/$INestableItemFilterProvider" {
import {$IItemFilter, $IItemFilter$Type} from "packages/wayoftime/bloodmagic/common/routing/$IItemFilter"
import {$ContainerFilter, $ContainerFilter$Type} from "packages/wayoftime/bloodmagic/common/container/item/$ContainerFilter"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IFilterKey, $IFilterKey$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$IFilterKey"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$IItemFilterProvider, $IItemFilterProvider$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$IItemFilterProvider"
import {$Button$OnPress, $Button$OnPress$Type} from "packages/net/minecraft/client/gui/components/$Button$OnPress"

export interface $INestableItemFilterProvider extends $IItemFilterProvider {

 "getFilterKey"(arg0: $ItemStack$Type, arg1: integer, arg2: $ItemStack$Type, arg3: integer): $IFilterKey
 "getInputItemFilter"(arg0: $ItemStack$Type, arg1: $BlockEntity$Type, arg2: $IItemHandler$Type): $IItemFilter
 "setGhostItemAmount"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): void
 "receiveButtonPress"(arg0: $ItemStack$Type, arg1: string, arg2: integer, arg3: integer): integer
 "isButtonGlobal"(arg0: $ItemStack$Type, arg1: string): boolean
 "getButtonAction"(arg0: $ContainerFilter$Type): $List<($Pair<(string), ($Button$OnPress)>)>
 "getCurrentButtonState"(arg0: $ItemStack$Type, arg1: string, arg2: integer): integer
 "getUninitializedItemFilter"(arg0: $ItemStack$Type): $IItemFilter
 "getTexturePositionForState"(arg0: $ItemStack$Type, arg1: string, arg2: integer): $Pair<(integer), (integer)>
 "getTextForHoverItem"(arg0: $ItemStack$Type, arg1: string, arg2: integer): $List<($Component)>
 "getOutputItemFilter"(arg0: $ItemStack$Type, arg1: $BlockEntity$Type, arg2: $IItemHandler$Type): $IItemFilter
 "getContainedStackForItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
}

export namespace $INestableItemFilterProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INestableItemFilterProvider$Type = ($INestableItemFilterProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INestableItemFilterProvider_ = $INestableItemFilterProvider$Type;
}}
declare module "packages/wayoftime/bloodmagic/recipe/helper/$IgnoredIInventory" {
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
declare module "packages/wayoftime/bloodmagic/common/item/$ItemSigil" {
import {$ISigil, $ISigil$Type} from "packages/wayoftime/bloodmagic/common/item/sigil/$ISigil"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Binding, $Binding$Type} from "packages/wayoftime/bloodmagic/core/data/$Binding"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IBindable, $IBindable$Type} from "packages/wayoftime/bloodmagic/common/item/$IBindable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSigil extends $Item implements $IBindable, $ISigil {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: integer)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isUnusable"(arg0: $ItemStack$Type): boolean
public "setUnusable"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
public "getLpUsed"(): integer
public "getBinding"(arg0: $ItemStack$Type): $Binding
public "onBind"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "hasArrayEffect"(): boolean
public "performArrayEffect"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
get "lpUsed"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSigil$Type = ($ItemSigil);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSigil_ = $ItemSigil$Type;
}}
declare module "packages/wayoftime/bloodmagic/potion/$PotionPlantLeech" {
import {$PotionBloodMagic, $PotionBloodMagic$Type} from "packages/wayoftime/bloodmagic/potion/$PotionBloodMagic"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $PotionPlantLeech extends $PotionBloodMagic {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionPlantLeech$Type = ($PotionPlantLeech);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionPlantLeech_ = $PotionPlantLeech$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/routing/$ItemEnchantFilterCore" {
import {$ContainerFilter, $ContainerFilter$Type} from "packages/wayoftime/bloodmagic/common/container/item/$ContainerFilter"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Button$OnPress, $Button$OnPress$Type} from "packages/net/minecraft/client/gui/components/$Button$OnPress"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemRouterFilter, $ItemRouterFilter$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$ItemRouterFilter"
import {$IFilterKey, $IFilterKey$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$IFilterKey"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INestableItemFilterProvider, $INestableItemFilterProvider$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$INestableItemFilterProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemEnchantFilterCore extends $ItemRouterFilter implements $INestableItemFilterProvider {
static readonly "inventorySize": integer
static readonly "maxUpgrades": integer
static readonly "FILTER_INV": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getFilterKey"(arg0: $ItemStack$Type, arg1: integer, arg2: $ItemStack$Type, arg3: integer): $IFilterKey
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getEnchantment"(arg0: $ItemStack$Type, arg1: integer): $Pair<($Enchantment), (integer)>
public "receiveButtonPress"(arg0: $ItemStack$Type, arg1: string, arg2: integer, arg3: integer): integer
public "isButtonGlobal"(arg0: $ItemStack$Type, arg1: string): boolean
public "getButtonAction"(arg0: $ContainerFilter$Type): $List<($Pair<(string), ($Button$OnPress)>)>
public "getIsFuzzy"(arg0: $ItemStack$Type, arg1: integer): boolean
public "cycleToNextEnchant"(arg0: $ItemStack$Type, arg1: integer): void
public "setIsFuzzy"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): void
public "getCurrentButtonState"(arg0: $ItemStack$Type, arg1: string, arg2: integer): integer
public "getTexturePositionForState"(arg0: $ItemStack$Type, arg1: string, arg2: integer): $Pair<(integer), (integer)>
public "getTextForHoverItem"(arg0: $ItemStack$Type, arg1: string, arg2: integer): $List<($Component)>
public "getEnchantmentIndex"(arg0: $ItemStack$Type, arg1: integer): integer
public "setEnchantmentIndex"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEnchantFilterCore$Type = ($ItemEnchantFilterCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEnchantFilterCore_ = $ItemEnchantFilterCore$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockDeforesterCharge" {
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockShapedExplosive, $BlockShapedExplosive$Type} from "packages/wayoftime/bloodmagic/common/block/$BlockShapedExplosive"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockDeforesterCharge extends $BlockShapedExplosive {
static readonly "ATTACHED": $EnumProperty<($Direction)>
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

constructor(arg0: integer, arg1: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDeforesterCharge$Type = ($BlockDeforesterCharge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDeforesterCharge_ = $BlockDeforesterCharge$Type;
}}
declare module "packages/wayoftime/bloodmagic/client/key/$IKeybindable" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$KeyBindings, $KeyBindings$Type} from "packages/wayoftime/bloodmagic/client/key/$KeyBindings"

export interface $IKeybindable {

 "onKeyPressed"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $KeyBindings$Type, arg3: boolean): void

(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $KeyBindings$Type, arg3: boolean): void
}

export namespace $IKeybindable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeybindable$Type = ($IKeybindable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IKeybindable_ = $IKeybindable$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/arc/$IARCTool" {
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IARCTool {

 "getDominantWillType"(arg0: $ItemStack$Type): $EnumDemonWillType
 "getCraftingSpeedMultiplier"(arg0: $ItemStack$Type): double
 "getAdditionalOutputChanceMultiplier"(arg0: $ItemStack$Type): double
}

export namespace $IARCTool {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IARCTool$Type = ($IARCTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IARCTool_ = $IARCTool$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/routing/$ItemStandardFilter" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemCompositeFilter, $ItemCompositeFilter$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$ItemCompositeFilter"
import {$IFilterKey, $IFilterKey$Type} from "packages/wayoftime/bloodmagic/common/item/routing/$IFilterKey"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemStandardFilter extends $ItemCompositeFilter {
static readonly "inventorySize": integer
static readonly "maxUpgrades": integer
static readonly "FILTER_INV": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getFilterKey"(arg0: $ItemStack$Type, arg1: integer, arg2: $ItemStack$Type, arg3: integer): $IFilterKey
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDisplayName"(): $Component
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStandardFilter$Type = ($ItemStandardFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStandardFilter_ = $ItemStandardFilter$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$IAlchemyItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IAlchemyItem {

 "isStackChangedOnUse"(arg0: $ItemStack$Type): boolean
 "onConsumeInput"(arg0: $ItemStack$Type): $ItemStack
}

export namespace $IAlchemyItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAlchemyItem$Type = ($IAlchemyItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAlchemyItem_ = $IAlchemyItem$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemSentientScythe" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$HoeItem, $HoeItem$Type} from "packages/net/minecraft/world/item/$HoeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IDemonWillWeapon, $IDemonWillWeapon$Type} from "packages/wayoftime/bloodmagic/api/compat/$IDemonWillWeapon"
import {$IMultiWillTool, $IMultiWillTool$Type} from "packages/wayoftime/bloodmagic/api/compat/$IMultiWillTool"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSentientScythe extends $HoeItem implements $IDemonWillWeapon, $IMultiWillTool {
static "soulBracket": (integer)[]
static "defaultDamageAdded": (double)[]
static "destructiveDamageAdded": (double)[]
static "vengefulDamageAdded": (double)[]
static "steadfastDamageAdded": (double)[]
static "defaultDigSpeedAdded": (double)[]
static "soulDrainPerSwing": (double)[]
static "soulDrop": (double)[]
static "staticDrop": (double)[]
static "healthBonus": (double)[]
static "vengefulAttackSpeed": (double)[]
static "destructiveAttackSpeed": (double)[]
static "absorptionTime": (integer)[]
static "maxAbsorptionHearts": double
static "poisonTime": (integer)[]
static "poisonLevel": (integer)[]
static "movementSpeed": (double)[]
static readonly "baseAttackDamage": double
static readonly "baseAttackSpeed": double
static readonly "durabilityFromMob": integer
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
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

constructor()

public "onEntitySwing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "getDigSpeed"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "getMovementSpeed"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "getRandomDemonWillDrop"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): $List<($ItemStack)>
public "getDropOfActivatedSword"(arg0: $ItemStack$Type): double
public "setDamageOfActivatedSword"(arg0: $ItemStack$Type, arg1: double): void
public "setAttackSpeedOfSword"(arg0: $ItemStack$Type, arg1: double): void
public "getDamageOfActivatedSword"(arg0: $ItemStack$Type): double
public "setDropOfActivatedSword"(arg0: $ItemStack$Type, arg1: double): void
public "applyEffectToEntity"(arg0: $EnumDemonWillType$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $Player$Type): void
public "setHealthBonusOfSword"(arg0: $ItemStack$Type, arg1: double): void
public "getStaticDropOfActivatedSword"(arg0: $ItemStack$Type): double
public "getAttackSpeedOfSword"(arg0: $ItemStack$Type): double
public "getHealthBonusOfSword"(arg0: $ItemStack$Type): double
public "setStaticDropOfActivatedSword"(arg0: $ItemStack$Type, arg1: double): void
public "setDrainOfActivatedSword"(arg0: $ItemStack$Type, arg1: double): void
public "getDrainOfActivatedSword"(arg0: $ItemStack$Type): double
public "getHealthBonus"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "getExtraDamage"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "recalculatePowers"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "setCurrentType"(arg0: $ItemStack$Type, arg1: $EnumDemonWillType$Type): void
public "getDigSpeedOfSword"(arg0: $ItemStack$Type): double
public "setSpeedOfSword"(arg0: $ItemStack$Type, arg1: double): void
public "setDigSpeedOfSword"(arg0: $ItemStack$Type, arg1: double): void
public "getSpeedOfSword"(arg0: $ItemStack$Type): double
public "attackEntitiesInAreaExcludingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EnumDemonWillType$Type, arg3: integer, arg4: $LivingEntity$Type, arg5: float): integer
public "getAttackSpeed"(arg0: $EnumDemonWillType$Type, arg1: integer): double
public "getCurrentType"(arg0: $ItemStack$Type): $EnumDemonWillType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSentientScythe$Type = ($ItemSentientScythe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSentientScythe_ = $ItemSentientScythe$Type;
}}
declare module "packages/wayoftime/bloodmagic/recipe/$RecipeARC" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$BloodMagicRecipe, $BloodMagicRecipe$Type} from "packages/wayoftime/bloodmagic/recipe/$BloodMagicRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$FluidStackIngredient, $FluidStackIngredient$Type} from "packages/wayoftime/bloodmagic/recipe/helper/$FluidStackIngredient"

export class $RecipeARC extends $BloodMagicRecipe {
static readonly "MAX_RANDOM_OUTPUTS": integer

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $Ingredient$Type, arg3: $FluidStackIngredient$Type, arg4: $ItemStack$Type, arg5: $FluidStack$Type, arg6: boolean)
constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: integer, arg3: $Ingredient$Type, arg4: $FluidStackIngredient$Type, arg5: $ItemStack$Type, arg6: $List$Type<($Pair$Type<($ItemStack$Type), ($Pair$Type<(double), (double)>)>)>, arg7: $FluidStack$Type, arg8: boolean)

public "getInput"(): $Ingredient
public "write"(arg0: $FriendlyByteBuf$Type): void
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getAllOutputChances"(): $List<($Pair<(double), (double)>)>
public "getFluidIngredient"(): $FluidStackIngredient
public "getTool"(): $Ingredient
public "getFluidOutput"(): $FluidStack
public "addRandomOutput"(arg0: $ItemStack$Type, arg1: double): $RecipeARC
public "addRandomOutput"(arg0: $ItemStack$Type, arg1: double, arg2: double): $RecipeARC
public "getAllListedOutputs"(): $List<($ItemStack)>
public "getAllListedOutputs"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $List<($ItemStack)>
public "getRequiredInputCount"(): integer
public "getConsumeIngredient"(): boolean
public "getAllOutputs"(arg0: $RandomSource$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: double): $List<($ItemStack)>
public "breakTool"(): boolean
get "input"(): $Ingredient
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "allOutputChances"(): $List<($Pair<(double), (double)>)>
get "fluidIngredient"(): $FluidStackIngredient
get "tool"(): $Ingredient
get "fluidOutput"(): $FluidStack
get "allListedOutputs"(): $List<($ItemStack)>
get "requiredInputCount"(): integer
get "consumeIngredient"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeARC$Type = ($RecipeARC);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeARC_ = $RecipeARC$Type;
}}
declare module "packages/wayoftime/bloodmagic/will/$DemonWillHolder" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$EnumDemonWillType, $EnumDemonWillType$Type} from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"

export class $DemonWillHolder {
 "willMap": $HashMap<($EnumDemonWillType), (double)>

constructor()

public "readFromNBT"(arg0: $CompoundTag$Type, arg1: string): void
public "writeToNBT"(arg0: $CompoundTag$Type, arg1: string): void
public "getWill"(arg0: $EnumDemonWillType$Type): double
public "drainWill"(arg0: $EnumDemonWillType$Type, arg1: double): double
public "addWill"(arg0: $EnumDemonWillType$Type, arg1: double, arg2: double): double
public "addWill"(arg0: $EnumDemonWillType$Type, arg1: double): void
public "clearWill"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DemonWillHolder$Type = ($DemonWillHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DemonWillHolder_ = $DemonWillHolder$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$AlchemyArrayRecipeSerializer$IFactory" {
import {$RecipeAlchemyArray, $RecipeAlchemyArray$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeAlchemyArray"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $AlchemyArrayRecipeSerializer$IFactory<RECIPE extends $RecipeAlchemyArray> {

 "create"(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: $Ingredient$Type, arg3: $Ingredient$Type, arg4: $ItemStack$Type): RECIPE

(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: $Ingredient$Type, arg3: $Ingredient$Type, arg4: $ItemStack$Type): RECIPE
}

export namespace $AlchemyArrayRecipeSerializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyArrayRecipeSerializer$IFactory$Type<RECIPE> = ($AlchemyArrayRecipeSerializer$IFactory<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyArrayRecipeSerializer$IFactory_<RECIPE> = $AlchemyArrayRecipeSerializer$IFactory$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemSigil, $ItemSigil$Type} from "packages/wayoftime/bloodmagic/common/item/$ItemSigil"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSigilBase extends $ItemSigil {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: string, arg1: integer)
constructor(arg0: string)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSigilBase$Type = ($ItemSigilBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSigilBase_ = $ItemSigilBase$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/block/$BlockDemonCrystallizer" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockDemonCrystallizer extends $Block implements $EntityBlock {
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
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDemonCrystallizer$Type = ($BlockDemonCrystallizer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDemonCrystallizer_ = $BlockDemonCrystallizer$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/block/$ItemBlockShapedCharge" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBlockShapedCharge extends $BlockItem {
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

public "place"(arg0: $BlockPlaceContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlockShapedCharge$Type = ($ItemBlockShapedCharge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockShapedCharge_ = $ItemBlockShapedCharge$Type;
}}
declare module "packages/wayoftime/bloodmagic/potion/$PotionSuspended" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$PotionBloodMagic, $PotionBloodMagic$Type} from "packages/wayoftime/bloodmagic/potion/$PotionBloodMagic"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $PotionSuspended extends $PotionBloodMagic {
static "noGravityList": $List<($LivingEntity)>

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionSuspended$Type = ($PotionSuspended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionSuspended_ = $PotionSuspended$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemActivationCrystal" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Binding, $Binding$Type} from "packages/wayoftime/bloodmagic/core/data/$Binding"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemActivationCrystal$CrystalType, $ItemActivationCrystal$CrystalType$Type} from "packages/wayoftime/bloodmagic/common/item/$ItemActivationCrystal$CrystalType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IBindable, $IBindable$Type} from "packages/wayoftime/bloodmagic/common/item/$IBindable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemActivationCrystal extends $Item implements $IBindable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $ItemActivationCrystal$CrystalType$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getCrystalLevel"(arg0: $ItemStack$Type): integer
public "getBinding"(arg0: $ItemStack$Type): $Binding
public "onBind"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemActivationCrystal$Type = ($ItemActivationCrystal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemActivationCrystal_ = $ItemActivationCrystal$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemSacrificialDagger" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
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
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemSacrificialDagger extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "isPlayerPreparedForSacrifice"(arg0: $Level$Type, arg1: $Player$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "setUseForSacrifice"(arg0: $ItemStack$Type, arg1: boolean): void
public "canUseForSacrifice"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSacrificialDagger$Type = ($ItemSacrificialDagger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSacrificialDagger_ = $ItemSacrificialDagger$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/recipe/serializer/$ARCRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$RecipeARC, $RecipeARC$Type} from "packages/wayoftime/bloodmagic/recipe/$RecipeARC"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$ARCRecipeSerializer$IFactory, $ARCRecipeSerializer$IFactory$Type} from "packages/wayoftime/bloodmagic/common/recipe/serializer/$ARCRecipeSerializer$IFactory"

export class $ARCRecipeSerializer<RECIPE extends $RecipeARC> implements $RecipeSerializer<(RECIPE)> {

constructor(arg0: $ARCRecipeSerializer$IFactory$Type<(RECIPE)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): RECIPE
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): RECIPE
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: RECIPE): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): RECIPE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ARCRecipeSerializer$Type<RECIPE> = ($ARCRecipeSerializer<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ARCRecipeSerializer_<RECIPE> = $ARCRecipeSerializer$Type<(RECIPE)>;
}}
declare module "packages/wayoftime/bloodmagic/common/registration/impl/$RecipeTypeDeferredRegister" {
import {$BloodMagicRecipe, $BloodMagicRecipe$Type} from "packages/wayoftime/bloodmagic/recipe/$BloodMagicRecipe"
import {$RecipeTypeRegistryObject, $RecipeTypeRegistryObject$Type} from "packages/wayoftime/bloodmagic/common/registration/impl/$RecipeTypeRegistryObject"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$WrappedDeferredRegister, $WrappedDeferredRegister$Type} from "packages/wayoftime/bloodmagic/common/registration/$WrappedDeferredRegister"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $RecipeTypeDeferredRegister extends $WrappedDeferredRegister<($RecipeType<(any)>)> {

constructor(arg0: string)

public "register"<RECIPE extends $BloodMagicRecipe>(arg0: string, arg1: $Supplier$Type<(any)>): $RecipeTypeRegistryObject<(RECIPE)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeTypeDeferredRegister$Type = ($RecipeTypeDeferredRegister);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeTypeDeferredRegister_ = $RecipeTypeDeferredRegister$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/$ItemRitualReader" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$EnumRitualReaderState, $EnumRitualReaderState$Type} from "packages/wayoftime/bloodmagic/ritual/$EnumRitualReaderState"
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
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemRitualReader extends $Item {
static readonly "tooltipBase": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getState"(arg0: $ItemStack$Type): $EnumRitualReaderState
public "setState"(arg0: $ItemStack$Type, arg1: $EnumRitualReaderState$Type): void
public "getBlockPos"(arg0: $ItemStack$Type): $BlockPos
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "setCurrentBlockRange"(arg0: $ItemStack$Type, arg1: string): void
public "getCurrentBlockRange"(arg0: $ItemStack$Type): string
public "notifyPlayerOfStateChange"(arg0: $EnumRitualReaderState$Type, arg1: $Player$Type): void
public "cycleReader"(arg0: $ItemStack$Type, arg1: $Player$Type): void
public "getMasterBlockPos"(arg0: $ItemStack$Type): $BlockPos
public "setMasterBlockPos"(arg0: $ItemStack$Type, arg1: $BlockPos$Type): $ItemStack
public "setBlockPos"(arg0: $ItemStack$Type, arg1: $BlockPos$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRitualReader$Type = ($ItemRitualReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRitualReader_ = $ItemRitualReader$Type;
}}
declare module "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilAir" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemSigilBase, $ItemSigilBase$Type} from "packages/wayoftime/bloodmagic/common/item/sigil/$ItemSigilBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSigilAir extends $ItemSigilBase {
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
export type $ItemSigilAir$Type = ($ItemSigilAir);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSigilAir_ = $ItemSigilAir$Type;
}}
