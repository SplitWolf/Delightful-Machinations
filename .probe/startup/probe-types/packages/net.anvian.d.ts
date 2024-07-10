declare module "packages/net/anvian/create_unbreakable/item/custom/$EternalItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EternalItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(properties: $Item$Properties$Type, amount: integer)

public "isFireResistant"(): boolean
public "canBeHurtBy"(damageSource: $DamageSource$Type): boolean
get "fireResistant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EternalItem$Type = ($EternalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EternalItem_ = $EternalItem$Type;
}}
declare module "packages/net/anvian/create_unbreakable/block/custom/$PhiloliteBlock" {
import {$EternalBlock, $EternalBlock$Type} from "packages/net/anvian/create_unbreakable/block/custom/$EternalBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PhiloliteBlock extends $EternalBlock {
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

public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhiloliteBlock$Type = ($PhiloliteBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhiloliteBlock_ = $PhiloliteBlock$Type;
}}
declare module "packages/net/anvian/create_unbreakable/block/custom/$LuminarchyBlock" {
import {$EternalBlock, $EternalBlock$Type} from "packages/net/anvian/create_unbreakable/block/custom/$EternalBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LuminarchyBlock extends $EternalBlock {
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

public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuminarchyBlock$Type = ($LuminarchyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuminarchyBlock_ = $LuminarchyBlock$Type;
}}
declare module "packages/net/anvian/create_unbreakable/block/custom/$EternalBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $EternalBlock extends $Block {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EternalBlock$Type = ($EternalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EternalBlock_ = $EternalBlock$Type;
}}
