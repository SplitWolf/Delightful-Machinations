declare module "packages/com/wolfieboy09/kjscc/peripheral/$PeripheralJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$DynamicPeripheralJS$PeripheralCallback, $DynamicPeripheralJS$PeripheralCallback$Type} from "packages/com/wolfieboy09/kjscc/peripheral/$DynamicPeripheralJS$PeripheralCallback"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockStatePredicate, $BlockStatePredicate$Type} from "packages/dev/latvian/mods/kubejs/block/state/$BlockStatePredicate"
import {$PeripheralMethod, $PeripheralMethod$Type} from "packages/com/wolfieboy09/kjscc/peripheral/$PeripheralMethod"

export class $PeripheralJS extends $EventJS {

constructor(arg0: $BlockStatePredicate$Type, arg1: string, arg2: $List$Type<($PeripheralMethod$Type)>)

public "method"(arg0: string, arg1: $DynamicPeripheralJS$PeripheralCallback$Type): $PeripheralJS
public "mainThreadMethod"(arg0: string, arg1: $DynamicPeripheralJS$PeripheralCallback$Type): $PeripheralJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PeripheralJS$Type = ($PeripheralJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PeripheralJS_ = $PeripheralJS$Type;
}}
declare module "packages/com/wolfieboy09/kjscc/peripheral/$PeripheralMethod" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$DynamicPeripheralJS$PeripheralCallback, $DynamicPeripheralJS$PeripheralCallback$Type} from "packages/com/wolfieboy09/kjscc/peripheral/$DynamicPeripheralJS$PeripheralCallback"

export class $PeripheralMethod extends $Record {

constructor(arg0: string, arg1: $DynamicPeripheralJS$PeripheralCallback$Type)
constructor(type: string, callback: $DynamicPeripheralJS$PeripheralCallback$Type, mainThread: boolean)

public "callback"(): $DynamicPeripheralJS$PeripheralCallback
public "type"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "mainThread"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PeripheralMethod$Type = ($PeripheralMethod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PeripheralMethod_ = $PeripheralMethod$Type;
}}
declare module "packages/com/wolfieboy09/kjscc/peripheral/$DynamicPeripheralJS$PeripheralCallback" {
import {$IComputerAccess, $IComputerAccess$Type} from "packages/dan200/computercraft/api/peripheral/$IComputerAccess"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ILuaContext, $ILuaContext$Type} from "packages/dan200/computercraft/api/lua/$ILuaContext"

export interface $DynamicPeripheralJS$PeripheralCallback {

 "call"(arg0: $BlockContainerJS$Type, arg1: $Direction$Type, arg2: $List$Type<(any)>, arg3: $IComputerAccess$Type, arg4: $ILuaContext$Type): any

(arg0: $BlockContainerJS$Type, arg1: $Direction$Type, arg2: $List$Type<(any)>, arg3: $IComputerAccess$Type, arg4: $ILuaContext$Type): any
}

export namespace $DynamicPeripheralJS$PeripheralCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicPeripheralJS$PeripheralCallback$Type = ($DynamicPeripheralJS$PeripheralCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicPeripheralJS$PeripheralCallback_ = $DynamicPeripheralJS$PeripheralCallback$Type;
}}
