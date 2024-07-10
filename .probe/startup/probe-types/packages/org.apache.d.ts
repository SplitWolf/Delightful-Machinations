declare module "packages/org/apache/maven/artifact/metadata/$ArtifactMetadata" {
import {$ArtifactMetadata as $ArtifactMetadata$0, $ArtifactMetadata$Type as $ArtifactMetadata$0$Type} from "packages/org/apache/maven/repository/legacy/metadata/$ArtifactMetadata"
import {$ArtifactRepository, $ArtifactRepository$Type} from "packages/org/apache/maven/artifact/repository/$ArtifactRepository"

/**
 * 
 * @deprecated
 */
export interface $ArtifactMetadata extends $ArtifactMetadata$0 {

 "merge"(arg0: $ArtifactMetadata$Type): void
 "merge"(arg0: $ArtifactMetadata$0$Type): void
 "getKey"(): any
 "getArtifactId"(): string
 "getGroupId"(): string
 "storedInGroupDirectory"(): boolean
 "storedInArtifactVersionDirectory"(): boolean
 "storeInLocalRepository"(arg0: $ArtifactRepository$Type, arg1: $ArtifactRepository$Type): void
 "getBaseVersion"(): string
 "getLocalFilename"(arg0: $ArtifactRepository$Type): string
 "extendedToString"(): string
 "getRemoteFilename"(): string
}

export namespace $ArtifactMetadata {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactMetadata$Type = ($ArtifactMetadata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactMetadata_ = $ArtifactMetadata$Type;
}}
declare module "packages/org/apache/logging/log4j/util/$TriConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriConsumer<K, V, S> {

 "accept"(k: K, v: V, s: S): void

(k: K, v: V, s: S): void
}

export namespace $TriConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriConsumer$Type<K, V, S> = ($TriConsumer<(K), (V), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriConsumer_<K, V, S> = $TriConsumer$Type<(K), (V), (S)>;
}}
declare module "packages/org/apache/maven/artifact/resolver/filter/$ArtifactFilter" {
import {$Artifact, $Artifact$Type} from "packages/org/apache/maven/artifact/$Artifact"

export interface $ArtifactFilter {

 "include"(arg0: $Artifact$Type): boolean

(arg0: $Artifact$Type): boolean
}

export namespace $ArtifactFilter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactFilter$Type = ($ArtifactFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactFilter_ = $ArtifactFilter$Type;
}}
declare module "packages/org/apache/maven/artifact/repository/$Authentication" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Authentication {

constructor(arg0: string, arg1: string)

public "getPassword"(): string
public "setPassword"(arg0: string): void
public "getPrivateKey"(): string
public "getUsername"(): string
public "setUsername"(arg0: string): void
public "setPassphrase"(arg0: string): void
public "setPrivateKey"(arg0: string): void
public "getPassphrase"(): string
get "password"(): string
set "password"(value: string)
get "privateKey"(): string
get "username"(): string
set "username"(value: string)
set "passphrase"(value: string)
set "privateKey"(value: string)
get "passphrase"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Authentication$Type = ($Authentication);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Authentication_ = $Authentication$Type;
}}
declare module "packages/org/apache/maven/artifact/versioning/$VersionRange" {
import {$ArtifactVersion, $ArtifactVersion$Type} from "packages/org/apache/maven/artifact/versioning/$ArtifactVersion"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Artifact, $Artifact$Type} from "packages/org/apache/maven/artifact/$Artifact"
import {$Restriction, $Restriction$Type} from "packages/org/apache/maven/artifact/versioning/$Restriction"

export class $VersionRange {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "createFromVersionSpec"(arg0: string): $VersionRange
public "getSelectedVersion"(arg0: $Artifact$Type): $ArtifactVersion
public "hasRestrictions"(): boolean
public "restrict"(arg0: $VersionRange$Type): $VersionRange
public "matchVersion"(arg0: $List$Type<($ArtifactVersion$Type)>): $ArtifactVersion
public "containsVersion"(arg0: $ArtifactVersion$Type): boolean
public static "createFromVersion"(arg0: string): $VersionRange
public "getRestrictions"(): $List<($Restriction)>
/**
 * 
 * @deprecated
 */
public "cloneOf"(): $VersionRange
public "isSelectedVersionKnown"(arg0: $Artifact$Type): boolean
public "getRecommendedVersion"(): $ArtifactVersion
get "restrictions"(): $List<($Restriction)>
get "recommendedVersion"(): $ArtifactVersion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VersionRange$Type = ($VersionRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VersionRange_ = $VersionRange$Type;
}}
declare module "packages/org/apache/maven/artifact/repository/$ArtifactRepository" {
import {$ArtifactMetadata, $ArtifactMetadata$Type} from "packages/org/apache/maven/artifact/metadata/$ArtifactMetadata"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArtifactRepositoryPolicy, $ArtifactRepositoryPolicy$Type} from "packages/org/apache/maven/artifact/repository/$ArtifactRepositoryPolicy"
import {$Artifact, $Artifact$Type} from "packages/org/apache/maven/artifact/$Artifact"
import {$ArtifactRepositoryLayout, $ArtifactRepositoryLayout$Type} from "packages/org/apache/maven/artifact/repository/layout/$ArtifactRepositoryLayout"
import {$Authentication, $Authentication$Type} from "packages/org/apache/maven/artifact/repository/$Authentication"
import {$Proxy, $Proxy$Type} from "packages/org/apache/maven/repository/$Proxy"

export interface $ArtifactRepository {

 "getKey"(): string
 "find"(arg0: $Artifact$Type): $Artifact
 "getId"(): string
 "getProtocol"(): string
 "getProxy"(): $Proxy
 "setId"(arg0: string): void
 "getUrl"(): string
 "getLayout"(): $ArtifactRepositoryLayout
 "setLayout"(arg0: $ArtifactRepositoryLayout$Type): void
 "getReleases"(): $ArtifactRepositoryPolicy
 "getSnapshots"(): $ArtifactRepositoryPolicy
 "isBlocked"(): boolean
/**
 * 
 * @deprecated
 */
 "isBlacklisted"(): boolean
 "setProxy"(arg0: $Proxy$Type): void
 "setUrl"(arg0: string): void
 "pathOfRemoteRepositoryMetadata"(arg0: $ArtifactMetadata$Type): string
 "getMirroredRepositories"(): $List<($ArtifactRepository)>
 "setReleaseUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$Type): void
 "setMirroredRepositories"(arg0: $List$Type<($ArtifactRepository$Type)>): void
 "pathOfLocalRepositoryMetadata"(arg0: $ArtifactMetadata$Type, arg1: $ArtifactRepository$Type): string
 "setSnapshotUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$Type): void
 "pathOf"(arg0: $Artifact$Type): string
 "getBasedir"(): string
/**
 * 
 * @deprecated
 */
 "setBlacklisted"(arg0: boolean): void
 "setBlocked"(arg0: boolean): void
 "findVersions"(arg0: $Artifact$Type): $List<(string)>
/**
 * 
 * @deprecated
 */
 "isUniqueVersion"(): boolean
 "setAuthentication"(arg0: $Authentication$Type): void
 "isProjectAware"(): boolean
 "getAuthentication"(): $Authentication
}

export namespace $ArtifactRepository {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactRepository$Type = ($ArtifactRepository);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactRepository_ = $ArtifactRepository$Type;
}}
declare module "packages/org/apache/logging/log4j/$Marker" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export interface $Marker extends $Serializable {

 "getName"(): string
 "remove"(marker: $Marker$Type): boolean
 "equals"(obj: any): boolean
 "hashCode"(): integer
 "setParents"(...markers: ($Marker$Type)[]): $Marker
 "addParents"(...markers: ($Marker$Type)[]): $Marker
 "getParents"(): ($Marker)[]
 "hasParents"(): boolean
 "isInstanceOf"(name: string): boolean
 "isInstanceOf"(m: $Marker$Type): boolean
}

export namespace $Marker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Marker$Type = ($Marker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Marker_ = $Marker$Type;
}}
declare module "packages/org/apache/commons/lang3/tuple/$Pair" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $Pair<L, R> implements $Map$Entry<(L), (R)>, $Comparable<($Pair<(L), (R)>)>, $Serializable {
static readonly "EMPTY_ARRAY": ($Pair<(any), (any)>)[]

constructor()

public "equals"(arg0: any): boolean
public "toString"(arg0: string): string
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $Pair$Type<(L), (R)>): integer
public "getValue"(): R
public static "of"<L, R>(arg0: $Map$Entry$Type<(L), (R)>): $Pair<(L), (R)>
public static "of"<L, R>(arg0: L, arg1: R): $Pair<(L), (R)>
public "getKey"(): L
public static "emptyArray"<L, R>(): ($Pair<(L), (R)>)[]
public "getRight"(): R
public "getLeft"(): L
public static "copyOf"<K, V>(arg0: $Map$Entry$Type<(any), (any)>): $Map$Entry<(L), (R)>
public "setValue"(arg0: R): R
public static "comparingByKey"<K, V>(arg0: $Comparator$Type<(any)>): $Comparator<($Map$Entry<(L), (R)>)>
public static "comparingByKey"<K extends $Comparable<(any)>, V>(): $Comparator<($Map$Entry<(L), (R)>)>
public static "comparingByValue"<K, V>(arg0: $Comparator$Type<(any)>): $Comparator<($Map$Entry<(L), (R)>)>
public static "comparingByValue"<K, V extends $Comparable<(any)>>(): $Comparator<($Map$Entry<(L), (R)>)>
get "value"(): R
get "key"(): L
get "right"(): R
get "left"(): L
set "value"(value: R)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Type<L, R> = ($Pair<(L), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<L, R> = $Pair$Type<(L), (R)>;
}}
declare module "packages/org/apache/maven/repository/legacy/metadata/$ArtifactMetadata" {
import {$ArtifactRepository, $ArtifactRepository$Type} from "packages/org/apache/maven/artifact/repository/$ArtifactRepository"

export interface $ArtifactMetadata {

 "merge"(arg0: $ArtifactMetadata$Type): void
 "getKey"(): any
 "getArtifactId"(): string
 "getGroupId"(): string
 "storedInGroupDirectory"(): boolean
 "storedInArtifactVersionDirectory"(): boolean
 "storeInLocalRepository"(arg0: $ArtifactRepository$Type, arg1: $ArtifactRepository$Type): void
 "getBaseVersion"(): string
 "getLocalFilename"(arg0: $ArtifactRepository$Type): string
 "extendedToString"(): string
 "getRemoteFilename"(): string
}

export namespace $ArtifactMetadata {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactMetadata$Type = ($ArtifactMetadata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactMetadata_ = $ArtifactMetadata$Type;
}}
declare module "packages/org/apache/maven/artifact/handler/$ArtifactHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ArtifactHandler {

 "getLanguage"(): string
 "getExtension"(): string
 "getClassifier"(): string
 "getDirectory"(): string
 "isIncludesDependencies"(): boolean
 "getPackaging"(): string
 "isAddedToClasspath"(): boolean
}

export namespace $ArtifactHandler {
const ROLE: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactHandler$Type = ($ArtifactHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactHandler_ = $ArtifactHandler$Type;
}}
declare module "packages/org/apache/maven/repository/$Proxy" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Proxy {
static readonly "PROXY_SOCKS5": string
static readonly "PROXY_SOCKS4": string
static readonly "PROXY_HTTP": string

constructor()

public "getHost"(): string
public "getPort"(): integer
public "getProtocol"(): string
public "setProtocol"(arg0: string): void
public "setPort"(arg0: integer): void
public "setHost"(arg0: string): void
public "getUserName"(): string
public "getPassword"(): string
public "setPassword"(arg0: string): void
public "setNtlmHost"(arg0: string): void
public "getNonProxyHosts"(): string
public "getNtlmHost"(): string
public "setUserName"(arg0: string): void
public "setNtlmDomain"(arg0: string): void
public "setNonProxyHosts"(arg0: string): void
public "getNtlmDomain"(): string
get "host"(): string
get "port"(): integer
get "protocol"(): string
set "protocol"(value: string)
set "port"(value: integer)
set "host"(value: string)
get "userName"(): string
get "password"(): string
set "password"(value: string)
set "ntlmHost"(value: string)
get "nonProxyHosts"(): string
get "ntlmHost"(): string
set "userName"(value: string)
set "ntlmDomain"(value: string)
set "nonProxyHosts"(value: string)
get "ntlmDomain"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Proxy$Type = ($Proxy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Proxy_ = $Proxy$Type;
}}
declare module "packages/org/apache/commons/lang3/function/$TriFunction" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"

export interface $TriFunction<T, U, V, R> {

 "apply"(arg0: T, arg1: U, arg2: V): R
 "andThen"<W>(arg0: $Function$Type<(any), (any)>): $TriFunction<(T), (U), (V), (W)>

(arg0: T, arg1: U, arg2: V): R
}

export namespace $TriFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriFunction$Type<T, U, V, R> = ($TriFunction<(T), (U), (V), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriFunction_<T, U, V, R> = $TriFunction$Type<(T), (U), (V), (R)>;
}}
declare module "packages/org/apache/maven/artifact/$Artifact" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$VersionRange, $VersionRange$Type} from "packages/org/apache/maven/artifact/versioning/$VersionRange"
import {$ArtifactRepository, $ArtifactRepository$Type} from "packages/org/apache/maven/artifact/repository/$ArtifactRepository"
import {$ArtifactMetadata, $ArtifactMetadata$Type} from "packages/org/apache/maven/artifact/metadata/$ArtifactMetadata"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$ArtifactHandler, $ArtifactHandler$Type} from "packages/org/apache/maven/artifact/handler/$ArtifactHandler"
import {$File, $File$Type} from "packages/java/io/$File"
import {$ArtifactVersion, $ArtifactVersion$Type} from "packages/org/apache/maven/artifact/versioning/$ArtifactVersion"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArtifactFilter, $ArtifactFilter$Type} from "packages/org/apache/maven/artifact/resolver/filter/$ArtifactFilter"

export interface $Artifact extends $Comparable<($Artifact)> {

 "setVersion"(arg0: string): void
 "getId"(): string
 "getType"(): string
 "isResolved"(): boolean
 "setRelease"(arg0: boolean): void
 "getFile"(): $File
 "getVersion"(): string
 "getScope"(): string
 "getRepository"(): $ArtifactRepository
 "setScope"(arg0: string): void
 "getVersionRange"(): $VersionRange
 "getSelectedVersion"(): $ArtifactVersion
 "getClassifier"(): string
 "getArtifactId"(): string
 "getGroupId"(): string
 "getDependencyTrail"(): $List<(string)>
 "setFile"(arg0: $File$Type): void
 "isSelectedVersionKnown"(): boolean
 "isOptional"(): boolean
 "getDownloadUrl"(): string
 "isSnapshot"(): boolean
 "isRelease"(): boolean
 "getDependencyFilter"(): $ArtifactFilter
 "setAvailableVersions"(arg0: $List$Type<($ArtifactVersion$Type)>): void
 "setDependencyFilter"(arg0: $ArtifactFilter$Type): void
 "getDependencyConflictId"(): string
 "getAvailableVersions"(): $List<($ArtifactVersion)>
 "setBaseVersion"(arg0: string): void
 "hasClassifier"(): boolean
 "updateVersion"(arg0: string, arg1: $ArtifactRepository$Type): void
 "getArtifactHandler"(): $ArtifactHandler
 "setDependencyTrail"(arg0: $List$Type<(string)>): void
 "setDownloadUrl"(arg0: string): void
 "addMetadata"(arg0: $ArtifactMetadata$Type): void
 "getBaseVersion"(): string
 "getMetadataList"(): $Collection<($ArtifactMetadata)>
 "setRepository"(arg0: $ArtifactRepository$Type): void
 "setGroupId"(arg0: string): void
 "selectVersion"(arg0: string): void
 "setResolvedVersion"(arg0: string): void
 "setArtifactHandler"(arg0: $ArtifactHandler$Type): void
 "setOptional"(arg0: boolean): void
 "setVersionRange"(arg0: $VersionRange$Type): void
 "setResolved"(arg0: boolean): void
 "setArtifactId"(arg0: string): void
 "compareTo"(arg0: $Artifact$Type): integer
}

export namespace $Artifact {
const RELEASE_VERSION: string
const LATEST_VERSION: string
const SNAPSHOT_VERSION: string
const VERSION_FILE_PATTERN: $Pattern
const SCOPE_COMPILE: string
const SCOPE_COMPILE_PLUS_RUNTIME: string
const SCOPE_TEST: string
const SCOPE_RUNTIME: string
const SCOPE_RUNTIME_PLUS_SYSTEM: string
const SCOPE_PROVIDED: string
const SCOPE_SYSTEM: string
const SCOPE_IMPORT: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Artifact$Type = ($Artifact);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Artifact_ = $Artifact$Type;
}}
declare module "packages/org/apache/maven/artifact/repository/layout/$ArtifactRepositoryLayout" {
import {$ArtifactMetadata, $ArtifactMetadata$Type} from "packages/org/apache/maven/artifact/metadata/$ArtifactMetadata"
import {$ArtifactRepository, $ArtifactRepository$Type} from "packages/org/apache/maven/artifact/repository/$ArtifactRepository"
import {$Artifact, $Artifact$Type} from "packages/org/apache/maven/artifact/$Artifact"

export interface $ArtifactRepositoryLayout {

 "getId"(): string
 "pathOfRemoteRepositoryMetadata"(arg0: $ArtifactMetadata$Type): string
 "pathOfLocalRepositoryMetadata"(arg0: $ArtifactMetadata$Type, arg1: $ArtifactRepository$Type): string
 "pathOf"(arg0: $Artifact$Type): string
}

export namespace $ArtifactRepositoryLayout {
const ROLE: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactRepositoryLayout$Type = ($ArtifactRepositoryLayout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactRepositoryLayout_ = $ArtifactRepositoryLayout$Type;
}}
declare module "packages/org/apache/commons/lang3/tuple/$MutablePair" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $MutablePair<L, R> extends $Pair<(L), (R)> {
static readonly "EMPTY_ARRAY": ($MutablePair<(any), (any)>)[]
 "left": L
 "right": R

constructor()
constructor(arg0: L, arg1: R)

public static "of"<L, R>(arg0: $Map$Entry$Type<(L), (R)>): $MutablePair<(L), (R)>
public static "of"<L, R>(arg0: L, arg1: R): $MutablePair<(L), (R)>
public "setValue"(arg0: R): R
public static "emptyArray"<L, R>(): ($MutablePair<(L), (R)>)[]
public "getRight"(): R
public "getLeft"(): L
public "setRight"(arg0: R): void
public "setLeft"(arg0: L): void
public static "copyOf"<K, V>(arg0: $Map$Entry$Type<(any), (any)>): $Map$Entry<(K), (V)>
public static "comparingByKey"<K, V>(arg0: $Comparator$Type<(any)>): $Comparator<($Map$Entry<(K), (V)>)>
public static "comparingByKey"<K extends $Comparable<(any)>, V>(): $Comparator<($Map$Entry<(K), (V)>)>
public static "comparingByValue"<K, V>(arg0: $Comparator$Type<(any)>): $Comparator<($Map$Entry<(K), (V)>)>
public static "comparingByValue"<K, V extends $Comparable<(any)>>(): $Comparator<($Map$Entry<(K), (V)>)>
set "value"(value: R)
get "right"(): R
get "left"(): L
set "right"(value: R)
set "left"(value: L)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutablePair$Type<L, R> = ($MutablePair<(L), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutablePair_<L, R> = $MutablePair$Type<(L), (R)>;
}}
declare module "packages/org/apache/commons/lang3/mutable/$Mutable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Mutable<T> {

 "getValue"(): T
 "setValue"(arg0: T): void
}

export namespace $Mutable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mutable$Type<T> = ($Mutable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mutable_<T> = $Mutable$Type<(T)>;
}}
declare module "packages/org/apache/maven/artifact/versioning/$ArtifactVersion" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"

export interface $ArtifactVersion extends $Comparable<($ArtifactVersion)> {

 "getMajorVersion"(): integer
 "getMinorVersion"(): integer
 "getBuildNumber"(): integer
 "getQualifier"(): string
 "parseVersion"(arg0: string): void
 "getIncrementalVersion"(): integer
 "compareTo"(arg0: $ArtifactVersion$Type): integer
}

export namespace $ArtifactVersion {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactVersion$Type = ($ArtifactVersion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactVersion_ = $ArtifactVersion$Type;
}}
declare module "packages/org/apache/maven/artifact/versioning/$Restriction" {
import {$ArtifactVersion, $ArtifactVersion$Type} from "packages/org/apache/maven/artifact/versioning/$ArtifactVersion"

export class $Restriction {
static readonly "EVERYTHING": $Restriction

constructor(arg0: $ArtifactVersion$Type, arg1: boolean, arg2: $ArtifactVersion$Type, arg3: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "containsVersion"(arg0: $ArtifactVersion$Type): boolean
public "getLowerBound"(): $ArtifactVersion
public "getUpperBound"(): $ArtifactVersion
public "isUpperBoundInclusive"(): boolean
public "isLowerBoundInclusive"(): boolean
get "lowerBound"(): $ArtifactVersion
get "upperBound"(): $ArtifactVersion
get "upperBoundInclusive"(): boolean
get "lowerBoundInclusive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Restriction$Type = ($Restriction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Restriction_ = $Restriction$Type;
}}
declare module "packages/org/apache/maven/artifact/repository/$ArtifactRepositoryPolicy" {
import {$Date, $Date$Type} from "packages/java/util/$Date"

export class $ArtifactRepositoryPolicy {
static readonly "UPDATE_POLICY_NEVER": string
static readonly "UPDATE_POLICY_ALWAYS": string
static readonly "UPDATE_POLICY_DAILY": string
static readonly "UPDATE_POLICY_INTERVAL": string
static readonly "CHECKSUM_POLICY_FAIL": string
static readonly "CHECKSUM_POLICY_WARN": string
static readonly "CHECKSUM_POLICY_IGNORE": string

constructor(arg0: boolean, arg1: string, arg2: string)
constructor(arg0: $ArtifactRepositoryPolicy$Type)
constructor()

public "toString"(): string
public "merge"(arg0: $ArtifactRepositoryPolicy$Type): void
public "isEnabled"(): boolean
public "setEnabled"(arg0: boolean): void
public "getChecksumPolicy"(): string
public "checkOutOfDate"(arg0: $Date$Type): boolean
public "setUpdatePolicy"(arg0: string): void
public "setChecksumPolicy"(arg0: string): void
public "getUpdatePolicy"(): string
get "enabled"(): boolean
set "enabled"(value: boolean)
get "checksumPolicy"(): string
set "updatePolicy"(value: string)
set "checksumPolicy"(value: string)
get "updatePolicy"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactRepositoryPolicy$Type = ($ArtifactRepositoryPolicy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactRepositoryPolicy_ = $ArtifactRepositoryPolicy$Type;
}}
declare module "packages/org/apache/commons/lang3/mutable/$MutableInt" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Mutable, $Mutable$Type} from "packages/org/apache/commons/lang3/mutable/$Mutable"

export class $MutableInt extends number implements $Comparable<($MutableInt)>, $Mutable<(number)> {

constructor(arg0: string)
constructor(arg0: number)
constructor(arg0: integer)
constructor()

public "add"(arg0: integer): void
public "add"(arg0: number): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $MutableInt$Type): integer
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public "increment"(): void
public "setValue"(arg0: integer): void
public "setValue"(arg0: number): void
public "getAndAdd"(arg0: number): integer
public "getAndAdd"(arg0: integer): integer
public "getAndIncrement"(): integer
public "getAndDecrement"(): integer
public "incrementAndGet"(): integer
public "decrementAndGet"(): integer
public "addAndGet"(arg0: integer): integer
public "addAndGet"(arg0: number): integer
public "subtract"(arg0: number): void
public "subtract"(arg0: integer): void
public "decrement"(): void
public "toInteger"(): integer
set "value"(value: integer)
set "value"(value: number)
get "andIncrement"(): integer
get "andDecrement"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableInt$Type = ($MutableInt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableInt_ = $MutableInt$Type;
}}
