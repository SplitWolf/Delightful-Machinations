declare module "packages/com/cstav/genshinstrument/item/$InstrumentItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$OpenInstrumentPacketSender, $OpenInstrumentPacketSender$Type} from "packages/com/cstav/genshinstrument/networking/$OpenInstrumentPacketSender"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InstrumentItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $OpenInstrumentPacketSender$Type)
constructor(arg0: $OpenInstrumentPacketSender$Type, arg1: $Item$Properties$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstrumentItem$Type = ($InstrumentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstrumentItem_ = $InstrumentItem$Type;
}}
declare module "packages/com/cstav/genshinstrument/networking/$OpenInstrumentPacketSender" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"

export interface $OpenInstrumentPacketSender {

 "send"(arg0: $ServerPlayer$Type): void

(arg0: $ServerPlayer$Type): void
}

export namespace $OpenInstrumentPacketSender {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpenInstrumentPacketSender$Type = ($OpenInstrumentPacketSender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OpenInstrumentPacketSender_ = $OpenInstrumentPacketSender$Type;
}}
