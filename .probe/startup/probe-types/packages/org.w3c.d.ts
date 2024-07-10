declare module "packages/org/w3c/dom/$DOMImplementation" {
import {$DocumentType, $DocumentType$Type} from "packages/org/w3c/dom/$DocumentType"
import {$Document, $Document$Type} from "packages/org/w3c/dom/$Document"

export interface $DOMImplementation {

 "getFeature"(arg0: string, arg1: string): any
 "createDocumentType"(arg0: string, arg1: string, arg2: string): $DocumentType
 "hasFeature"(arg0: string, arg1: string): boolean
 "createDocument"(arg0: string, arg1: string, arg2: $DocumentType$Type): $Document
}

export namespace $DOMImplementation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DOMImplementation$Type = ($DOMImplementation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DOMImplementation_ = $DOMImplementation$Type;
}}
declare module "packages/org/w3c/dom/$CDATASection" {
import {$Text, $Text$Type} from "packages/org/w3c/dom/$Text"
import {$NamedNodeMap, $NamedNodeMap$Type} from "packages/org/w3c/dom/$NamedNodeMap"
import {$Document, $Document$Type} from "packages/org/w3c/dom/$Document"
import {$UserDataHandler, $UserDataHandler$Type} from "packages/org/w3c/dom/$UserDataHandler"
import {$Node, $Node$Type} from "packages/org/w3c/dom/$Node"
import {$NodeList, $NodeList$Type} from "packages/org/w3c/dom/$NodeList"

export interface $CDATASection extends $Text {

 "isElementContentWhitespace"(): boolean
 "getWholeText"(): string
 "replaceWholeText"(arg0: string): $Text
 "splitText"(arg0: integer): $Text
 "getLength"(): integer
 "getData"(): string
 "appendData"(arg0: string): void
 "substringData"(arg0: integer, arg1: integer): string
 "insertData"(arg0: integer, arg1: string): void
 "deleteData"(arg0: integer, arg1: integer): void
 "setData"(arg0: string): void
 "replaceData"(arg0: integer, arg1: integer, arg2: string): void
 "setUserData"(arg0: string, arg1: any, arg2: $UserDataHandler$Type): any
 "getPrefix"(): string
 "normalize"(): void
 "getAttributes"(): $NamedNodeMap
 "isSupported"(arg0: string, arg1: string): boolean
 "getFeature"(arg0: string, arg1: string): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): string
 "removeChild"(arg0: $Node$Type): $Node
 "setNodeValue"(arg0: string): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): string
 "insertBefore"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "getBaseURI"(): string
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): string
 "setPrefix"(arg0: string): void
 "compareDocumentPosition"(arg0: $Node$Type): short
 "getTextContent"(): string
 "setTextContent"(arg0: string): void
 "isSameNode"(arg0: $Node$Type): boolean
 "lookupPrefix"(arg0: string): string
 "isDefaultNamespace"(arg0: string): boolean
 "lookupNamespaceURI"(arg0: string): string
 "isEqualNode"(arg0: $Node$Type): boolean
 "getUserData"(arg0: string): any
 "hasAttributes"(): boolean
 "getLocalName"(): string
 "getChildNodes"(): $NodeList
}

export namespace $CDATASection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CDATASection$Type = ($CDATASection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CDATASection_ = $CDATASection$Type;
}}
declare module "packages/org/w3c/dom/$Document" {
import {$CDATASection, $CDATASection$Type} from "packages/org/w3c/dom/$CDATASection"
import {$Node, $Node$Type} from "packages/org/w3c/dom/$Node"
import {$UserDataHandler, $UserDataHandler$Type} from "packages/org/w3c/dom/$UserDataHandler"
import {$DocumentFragment, $DocumentFragment$Type} from "packages/org/w3c/dom/$DocumentFragment"
import {$Attr, $Attr$Type} from "packages/org/w3c/dom/$Attr"
import {$ProcessingInstruction, $ProcessingInstruction$Type} from "packages/org/w3c/dom/$ProcessingInstruction"
import {$NodeList, $NodeList$Type} from "packages/org/w3c/dom/$NodeList"
import {$EntityReference, $EntityReference$Type} from "packages/org/w3c/dom/$EntityReference"
import {$DocumentType, $DocumentType$Type} from "packages/org/w3c/dom/$DocumentType"
import {$DOMImplementation, $DOMImplementation$Type} from "packages/org/w3c/dom/$DOMImplementation"
import {$Element, $Element$Type} from "packages/org/w3c/dom/$Element"
import {$Text, $Text$Type} from "packages/org/w3c/dom/$Text"
import {$NamedNodeMap, $NamedNodeMap$Type} from "packages/org/w3c/dom/$NamedNodeMap"
import {$Comment, $Comment$Type} from "packages/org/w3c/dom/$Comment"
import {$DOMConfiguration, $DOMConfiguration$Type} from "packages/org/w3c/dom/$DOMConfiguration"

export interface $Document extends $Node {

 "createEntityReference"(arg0: string): $EntityReference
 "setXmlVersion"(arg0: string): void
 "createComment"(arg0: string): $Comment
 "createProcessingInstruction"(arg0: string, arg1: string): $ProcessingInstruction
 "setStrictErrorChecking"(arg0: boolean): void
 "setDocumentURI"(arg0: string): void
 "setXmlStandalone"(arg0: boolean): void
 "createCDATASection"(arg0: string): $CDATASection
 "createTextNode"(arg0: string): $Text
 "getDocumentURI"(): string
 "getImplementation"(): $DOMImplementation
 "importNode"(arg0: $Node$Type, arg1: boolean): $Node
 "createDocumentFragment"(): $DocumentFragment
 "getDoctype"(): $DocumentType
 "getElementsByTagName"(arg0: string): $NodeList
 "getStrictErrorChecking"(): boolean
 "getInputEncoding"(): string
 "getXmlEncoding"(): string
 "getXmlVersion"(): string
 "getXmlStandalone"(): boolean
 "renameNode"(arg0: $Node$Type, arg1: string, arg2: string): $Node
 "normalizeDocument"(): void
 "getDomConfig"(): $DOMConfiguration
 "adoptNode"(arg0: $Node$Type): $Node
 "getElementById"(arg0: string): $Element
 "getElementsByTagNameNS"(arg0: string, arg1: string): $NodeList
 "createAttributeNS"(arg0: string, arg1: string): $Attr
 "createAttribute"(arg0: string): $Attr
 "createElementNS"(arg0: string, arg1: string): $Element
 "createElement"(arg0: string): $Element
 "getDocumentElement"(): $Element
 "setUserData"(arg0: string, arg1: any, arg2: $UserDataHandler$Type): any
 "getPrefix"(): string
 "normalize"(): void
 "getAttributes"(): $NamedNodeMap
 "isSupported"(arg0: string, arg1: string): boolean
 "getFeature"(arg0: string, arg1: string): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): string
 "removeChild"(arg0: $Node$Type): $Node
 "setNodeValue"(arg0: string): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): string
 "insertBefore"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "getBaseURI"(): string
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): string
 "setPrefix"(arg0: string): void
 "compareDocumentPosition"(arg0: $Node$Type): short
 "getTextContent"(): string
 "setTextContent"(arg0: string): void
 "isSameNode"(arg0: $Node$Type): boolean
 "lookupPrefix"(arg0: string): string
 "isDefaultNamespace"(arg0: string): boolean
 "lookupNamespaceURI"(arg0: string): string
 "isEqualNode"(arg0: $Node$Type): boolean
 "getUserData"(arg0: string): any
 "hasAttributes"(): boolean
 "getLocalName"(): string
 "getChildNodes"(): $NodeList
}

export namespace $Document {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Document$Type = ($Document);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Document_ = $Document$Type;
}}
declare module "packages/org/w3c/dom/$DocumentType" {
import {$NamedNodeMap, $NamedNodeMap$Type} from "packages/org/w3c/dom/$NamedNodeMap"
import {$Document, $Document$Type} from "packages/org/w3c/dom/$Document"
import {$UserDataHandler, $UserDataHandler$Type} from "packages/org/w3c/dom/$UserDataHandler"
import {$Node, $Node$Type} from "packages/org/w3c/dom/$Node"
import {$NodeList, $NodeList$Type} from "packages/org/w3c/dom/$NodeList"

export interface $DocumentType extends $Node {

 "getName"(): string
 "getEntities"(): $NamedNodeMap
 "getInternalSubset"(): string
 "getSystemId"(): string
 "getPublicId"(): string
 "getNotations"(): $NamedNodeMap
 "setUserData"(arg0: string, arg1: any, arg2: $UserDataHandler$Type): any
 "getPrefix"(): string
 "normalize"(): void
 "getAttributes"(): $NamedNodeMap
 "isSupported"(arg0: string, arg1: string): boolean
 "getFeature"(arg0: string, arg1: string): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): string
 "removeChild"(arg0: $Node$Type): $Node
 "setNodeValue"(arg0: string): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): string
 "insertBefore"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "getBaseURI"(): string
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): string
 "setPrefix"(arg0: string): void
 "compareDocumentPosition"(arg0: $Node$Type): short
 "getTextContent"(): string
 "setTextContent"(arg0: string): void
 "isSameNode"(arg0: $Node$Type): boolean
 "lookupPrefix"(arg0: string): string
 "isDefaultNamespace"(arg0: string): boolean
 "lookupNamespaceURI"(arg0: string): string
 "isEqualNode"(arg0: $Node$Type): boolean
 "getUserData"(arg0: string): any
 "hasAttributes"(): boolean
 "getLocalName"(): string
 "getChildNodes"(): $NodeList
}

export namespace $DocumentType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DocumentType$Type = ($DocumentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DocumentType_ = $DocumentType$Type;
}}
declare module "packages/org/w3c/dom/$EntityReference" {
import {$NamedNodeMap, $NamedNodeMap$Type} from "packages/org/w3c/dom/$NamedNodeMap"
import {$Document, $Document$Type} from "packages/org/w3c/dom/$Document"
import {$UserDataHandler, $UserDataHandler$Type} from "packages/org/w3c/dom/$UserDataHandler"
import {$Node, $Node$Type} from "packages/org/w3c/dom/$Node"
import {$NodeList, $NodeList$Type} from "packages/org/w3c/dom/$NodeList"

export interface $EntityReference extends $Node {

 "setUserData"(arg0: string, arg1: any, arg2: $UserDataHandler$Type): any
 "getPrefix"(): string
 "normalize"(): void
 "getAttributes"(): $NamedNodeMap
 "isSupported"(arg0: string, arg1: string): boolean
 "getFeature"(arg0: string, arg1: string): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): string
 "removeChild"(arg0: $Node$Type): $Node
 "setNodeValue"(arg0: string): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): string
 "insertBefore"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "getBaseURI"(): string
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): string
 "setPrefix"(arg0: string): void
 "compareDocumentPosition"(arg0: $Node$Type): short
 "getTextContent"(): string
 "setTextContent"(arg0: string): void
 "isSameNode"(arg0: $Node$Type): boolean
 "lookupPrefix"(arg0: string): string
 "isDefaultNamespace"(arg0: string): boolean
 "lookupNamespaceURI"(arg0: string): string
 "isEqualNode"(arg0: $Node$Type): boolean
 "getUserData"(arg0: string): any
 "hasAttributes"(): boolean
 "getLocalName"(): string
 "getChildNodes"(): $NodeList
}

export namespace $EntityReference {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityReference$Type = ($EntityReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityReference_ = $EntityReference$Type;
}}
declare module "packages/org/w3c/dom/$Node" {
import {$NamedNodeMap, $NamedNodeMap$Type} from "packages/org/w3c/dom/$NamedNodeMap"
import {$Document, $Document$Type} from "packages/org/w3c/dom/$Document"
import {$UserDataHandler, $UserDataHandler$Type} from "packages/org/w3c/dom/$UserDataHandler"
import {$NodeList, $NodeList$Type} from "packages/org/w3c/dom/$NodeList"

export interface $Node {

 "setUserData"(arg0: string, arg1: any, arg2: $UserDataHandler$Type): any
 "getPrefix"(): string
 "normalize"(): void
 "getAttributes"(): $NamedNodeMap
 "isSupported"(arg0: string, arg1: string): boolean
 "getFeature"(arg0: string, arg1: string): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): string
 "removeChild"(arg0: $Node$Type): $Node
 "setNodeValue"(arg0: string): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): string
 "insertBefore"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "getBaseURI"(): string
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): string
 "setPrefix"(arg0: string): void
 "compareDocumentPosition"(arg0: $Node$Type): short
 "getTextContent"(): string
 "setTextContent"(arg0: string): void
 "isSameNode"(arg0: $Node$Type): boolean
 "lookupPrefix"(arg0: string): string
 "isDefaultNamespace"(arg0: string): boolean
 "lookupNamespaceURI"(arg0: string): string
 "isEqualNode"(arg0: $Node$Type): boolean
 "getUserData"(arg0: string): any
 "hasAttributes"(): boolean
 "getLocalName"(): string
 "getChildNodes"(): $NodeList
}

export namespace $Node {
const ELEMENT_NODE: short
const ATTRIBUTE_NODE: short
const TEXT_NODE: short
const CDATA_SECTION_NODE: short
const ENTITY_REFERENCE_NODE: short
const ENTITY_NODE: short
const PROCESSING_INSTRUCTION_NODE: short
const COMMENT_NODE: short
const DOCUMENT_NODE: short
const DOCUMENT_TYPE_NODE: short
const DOCUMENT_FRAGMENT_NODE: short
const NOTATION_NODE: short
const DOCUMENT_POSITION_DISCONNECTED: short
const DOCUMENT_POSITION_PRECEDING: short
const DOCUMENT_POSITION_FOLLOWING: short
const DOCUMENT_POSITION_CONTAINS: short
const DOCUMENT_POSITION_CONTAINED_BY: short
const DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: short
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Node$Type = ($Node);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Node_ = $Node$Type;
}}
declare module "packages/org/w3c/dom/$CharacterData" {
import {$NamedNodeMap, $NamedNodeMap$Type} from "packages/org/w3c/dom/$NamedNodeMap"
import {$Document, $Document$Type} from "packages/org/w3c/dom/$Document"
import {$UserDataHandler, $UserDataHandler$Type} from "packages/org/w3c/dom/$UserDataHandler"
import {$Node, $Node$Type} from "packages/org/w3c/dom/$Node"
import {$NodeList, $NodeList$Type} from "packages/org/w3c/dom/$NodeList"

export interface $CharacterData extends $Node {

 "getLength"(): integer
 "getData"(): string
 "appendData"(arg0: string): void
 "substringData"(arg0: integer, arg1: integer): string
 "insertData"(arg0: integer, arg1: string): void
 "deleteData"(arg0: integer, arg1: integer): void
 "setData"(arg0: string): void
 "replaceData"(arg0: integer, arg1: integer, arg2: string): void
 "setUserData"(arg0: string, arg1: any, arg2: $UserDataHandler$Type): any
 "getPrefix"(): string
 "normalize"(): void
 "getAttributes"(): $NamedNodeMap
 "isSupported"(arg0: string, arg1: string): boolean
 "getFeature"(arg0: string, arg1: string): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): string
 "removeChild"(arg0: $Node$Type): $Node
 "setNodeValue"(arg0: string): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): string
 "insertBefore"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "getBaseURI"(): string
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): string
 "setPrefix"(arg0: string): void
 "compareDocumentPosition"(arg0: $Node$Type): short
 "getTextContent"(): string
 "setTextContent"(arg0: string): void
 "isSameNode"(arg0: $Node$Type): boolean
 "lookupPrefix"(arg0: string): string
 "isDefaultNamespace"(arg0: string): boolean
 "lookupNamespaceURI"(arg0: string): string
 "isEqualNode"(arg0: $Node$Type): boolean
 "getUserData"(arg0: string): any
 "hasAttributes"(): boolean
 "getLocalName"(): string
 "getChildNodes"(): $NodeList
}

export namespace $CharacterData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharacterData$Type = ($CharacterData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CharacterData_ = $CharacterData$Type;
}}
declare module "packages/org/w3c/dom/$TypeInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TypeInfo {

 "getTypeName"(): string
 "getTypeNamespace"(): string
 "isDerivedFrom"(arg0: string, arg1: string, arg2: integer): boolean
}

export namespace $TypeInfo {
const DERIVATION_RESTRICTION: integer
const DERIVATION_EXTENSION: integer
const DERIVATION_UNION: integer
const DERIVATION_LIST: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeInfo$Type = ($TypeInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeInfo_ = $TypeInfo$Type;
}}
declare module "packages/org/w3c/dom/$Text" {
import {$NamedNodeMap, $NamedNodeMap$Type} from "packages/org/w3c/dom/$NamedNodeMap"
import {$CharacterData, $CharacterData$Type} from "packages/org/w3c/dom/$CharacterData"
import {$Document, $Document$Type} from "packages/org/w3c/dom/$Document"
import {$UserDataHandler, $UserDataHandler$Type} from "packages/org/w3c/dom/$UserDataHandler"
import {$Node, $Node$Type} from "packages/org/w3c/dom/$Node"
import {$NodeList, $NodeList$Type} from "packages/org/w3c/dom/$NodeList"

export interface $Text extends $CharacterData {

 "isElementContentWhitespace"(): boolean
 "getWholeText"(): string
 "replaceWholeText"(arg0: string): $Text
 "splitText"(arg0: integer): $Text
 "getLength"(): integer
 "getData"(): string
 "appendData"(arg0: string): void
 "substringData"(arg0: integer, arg1: integer): string
 "insertData"(arg0: integer, arg1: string): void
 "deleteData"(arg0: integer, arg1: integer): void
 "setData"(arg0: string): void
 "replaceData"(arg0: integer, arg1: integer, arg2: string): void
 "setUserData"(arg0: string, arg1: any, arg2: $UserDataHandler$Type): any
 "getPrefix"(): string
 "normalize"(): void
 "getAttributes"(): $NamedNodeMap
 "isSupported"(arg0: string, arg1: string): boolean
 "getFeature"(arg0: string, arg1: string): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): string
 "removeChild"(arg0: $Node$Type): $Node
 "setNodeValue"(arg0: string): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): string
 "insertBefore"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "getBaseURI"(): string
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): string
 "setPrefix"(arg0: string): void
 "compareDocumentPosition"(arg0: $Node$Type): short
 "getTextContent"(): string
 "setTextContent"(arg0: string): void
 "isSameNode"(arg0: $Node$Type): boolean
 "lookupPrefix"(arg0: string): string
 "isDefaultNamespace"(arg0: string): boolean
 "lookupNamespaceURI"(arg0: string): string
 "isEqualNode"(arg0: $Node$Type): boolean
 "getUserData"(arg0: string): any
 "hasAttributes"(): boolean
 "getLocalName"(): string
 "getChildNodes"(): $NodeList
}

export namespace $Text {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Text$Type = ($Text);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Text_ = $Text$Type;
}}
declare module "packages/org/w3c/dom/$NamedNodeMap" {
import {$Node, $Node$Type} from "packages/org/w3c/dom/$Node"

export interface $NamedNodeMap {

 "getLength"(): integer
 "item"(arg0: integer): $Node
 "getNamedItem"(arg0: string): $Node
 "getNamedItemNS"(arg0: string, arg1: string): $Node
 "removeNamedItemNS"(arg0: string, arg1: string): $Node
 "setNamedItem"(arg0: $Node$Type): $Node
 "setNamedItemNS"(arg0: $Node$Type): $Node
 "removeNamedItem"(arg0: string): $Node
}

export namespace $NamedNodeMap {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedNodeMap$Type = ($NamedNodeMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NamedNodeMap_ = $NamedNodeMap$Type;
}}
declare module "packages/org/w3c/dom/$Attr" {
import {$Element, $Element$Type} from "packages/org/w3c/dom/$Element"
import {$NamedNodeMap, $NamedNodeMap$Type} from "packages/org/w3c/dom/$NamedNodeMap"
import {$TypeInfo, $TypeInfo$Type} from "packages/org/w3c/dom/$TypeInfo"
import {$Document, $Document$Type} from "packages/org/w3c/dom/$Document"
import {$UserDataHandler, $UserDataHandler$Type} from "packages/org/w3c/dom/$UserDataHandler"
import {$Node, $Node$Type} from "packages/org/w3c/dom/$Node"
import {$NodeList, $NodeList$Type} from "packages/org/w3c/dom/$NodeList"

export interface $Attr extends $Node {

 "getName"(): string
 "getValue"(): string
 "setValue"(arg0: string): void
 "getOwnerElement"(): $Element
 "getSpecified"(): boolean
 "getSchemaTypeInfo"(): $TypeInfo
 "isId"(): boolean
 "setUserData"(arg0: string, arg1: any, arg2: $UserDataHandler$Type): any
 "getPrefix"(): string
 "normalize"(): void
 "getAttributes"(): $NamedNodeMap
 "isSupported"(arg0: string, arg1: string): boolean
 "getFeature"(arg0: string, arg1: string): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): string
 "removeChild"(arg0: $Node$Type): $Node
 "setNodeValue"(arg0: string): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): string
 "insertBefore"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "getBaseURI"(): string
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): string
 "setPrefix"(arg0: string): void
 "compareDocumentPosition"(arg0: $Node$Type): short
 "getTextContent"(): string
 "setTextContent"(arg0: string): void
 "isSameNode"(arg0: $Node$Type): boolean
 "lookupPrefix"(arg0: string): string
 "isDefaultNamespace"(arg0: string): boolean
 "lookupNamespaceURI"(arg0: string): string
 "isEqualNode"(arg0: $Node$Type): boolean
 "getUserData"(arg0: string): any
 "hasAttributes"(): boolean
 "getLocalName"(): string
 "getChildNodes"(): $NodeList
}

export namespace $Attr {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Attr$Type = ($Attr);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Attr_ = $Attr$Type;
}}
declare module "packages/org/w3c/dom/$Comment" {
import {$NamedNodeMap, $NamedNodeMap$Type} from "packages/org/w3c/dom/$NamedNodeMap"
import {$CharacterData, $CharacterData$Type} from "packages/org/w3c/dom/$CharacterData"
import {$Document, $Document$Type} from "packages/org/w3c/dom/$Document"
import {$UserDataHandler, $UserDataHandler$Type} from "packages/org/w3c/dom/$UserDataHandler"
import {$Node, $Node$Type} from "packages/org/w3c/dom/$Node"
import {$NodeList, $NodeList$Type} from "packages/org/w3c/dom/$NodeList"

export interface $Comment extends $CharacterData {

 "getLength"(): integer
 "getData"(): string
 "appendData"(arg0: string): void
 "substringData"(arg0: integer, arg1: integer): string
 "insertData"(arg0: integer, arg1: string): void
 "deleteData"(arg0: integer, arg1: integer): void
 "setData"(arg0: string): void
 "replaceData"(arg0: integer, arg1: integer, arg2: string): void
 "setUserData"(arg0: string, arg1: any, arg2: $UserDataHandler$Type): any
 "getPrefix"(): string
 "normalize"(): void
 "getAttributes"(): $NamedNodeMap
 "isSupported"(arg0: string, arg1: string): boolean
 "getFeature"(arg0: string, arg1: string): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): string
 "removeChild"(arg0: $Node$Type): $Node
 "setNodeValue"(arg0: string): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): string
 "insertBefore"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "getBaseURI"(): string
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): string
 "setPrefix"(arg0: string): void
 "compareDocumentPosition"(arg0: $Node$Type): short
 "getTextContent"(): string
 "setTextContent"(arg0: string): void
 "isSameNode"(arg0: $Node$Type): boolean
 "lookupPrefix"(arg0: string): string
 "isDefaultNamespace"(arg0: string): boolean
 "lookupNamespaceURI"(arg0: string): string
 "isEqualNode"(arg0: $Node$Type): boolean
 "getUserData"(arg0: string): any
 "hasAttributes"(): boolean
 "getLocalName"(): string
 "getChildNodes"(): $NodeList
}

export namespace $Comment {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Comment$Type = ($Comment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Comment_ = $Comment$Type;
}}
declare module "packages/org/w3c/dom/$UserDataHandler" {
import {$Node, $Node$Type} from "packages/org/w3c/dom/$Node"

export interface $UserDataHandler {

 "handle"(arg0: short, arg1: string, arg2: any, arg3: $Node$Type, arg4: $Node$Type): void

(arg0: short, arg1: string, arg2: any, arg3: $Node$Type, arg4: $Node$Type): void
}

export namespace $UserDataHandler {
const NODE_CLONED: short
const NODE_IMPORTED: short
const NODE_DELETED: short
const NODE_RENAMED: short
const NODE_ADOPTED: short
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserDataHandler$Type = ($UserDataHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UserDataHandler_ = $UserDataHandler$Type;
}}
declare module "packages/org/w3c/dom/$Element" {
import {$NamedNodeMap, $NamedNodeMap$Type} from "packages/org/w3c/dom/$NamedNodeMap"
import {$TypeInfo, $TypeInfo$Type} from "packages/org/w3c/dom/$TypeInfo"
import {$Document, $Document$Type} from "packages/org/w3c/dom/$Document"
import {$UserDataHandler, $UserDataHandler$Type} from "packages/org/w3c/dom/$UserDataHandler"
import {$Node, $Node$Type} from "packages/org/w3c/dom/$Node"
import {$Attr, $Attr$Type} from "packages/org/w3c/dom/$Attr"
import {$NodeList, $NodeList$Type} from "packages/org/w3c/dom/$NodeList"

export interface $Element extends $Node {

 "setAttribute"(arg0: string, arg1: string): void
 "getAttribute"(arg0: string): string
 "setAttributeNodeNS"(arg0: $Attr$Type): $Attr
 "setAttributeNode"(arg0: $Attr$Type): $Attr
 "setIdAttributeNode"(arg0: $Attr$Type, arg1: boolean): void
 "getAttributeNodeNS"(arg0: string, arg1: string): $Attr
 "getAttributeNode"(arg0: string): $Attr
 "setAttributeNS"(arg0: string, arg1: string, arg2: string): void
 "getElementsByTagName"(arg0: string): $NodeList
 "removeAttributeNode"(arg0: $Attr$Type): $Attr
 "getElementsByTagNameNS"(arg0: string, arg1: string): $NodeList
 "removeAttribute"(arg0: string): void
 "getAttributeNS"(arg0: string, arg1: string): string
 "removeAttributeNS"(arg0: string, arg1: string): void
 "hasAttribute"(arg0: string): boolean
 "hasAttributeNS"(arg0: string, arg1: string): boolean
 "setIdAttributeNS"(arg0: string, arg1: string, arg2: boolean): void
 "getSchemaTypeInfo"(): $TypeInfo
 "setIdAttribute"(arg0: string, arg1: boolean): void
 "getTagName"(): string
 "setUserData"(arg0: string, arg1: any, arg2: $UserDataHandler$Type): any
 "getPrefix"(): string
 "normalize"(): void
 "getAttributes"(): $NamedNodeMap
 "isSupported"(arg0: string, arg1: string): boolean
 "getFeature"(arg0: string, arg1: string): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): string
 "removeChild"(arg0: $Node$Type): $Node
 "setNodeValue"(arg0: string): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): string
 "insertBefore"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "getBaseURI"(): string
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): string
 "setPrefix"(arg0: string): void
 "compareDocumentPosition"(arg0: $Node$Type): short
 "getTextContent"(): string
 "setTextContent"(arg0: string): void
 "isSameNode"(arg0: $Node$Type): boolean
 "lookupPrefix"(arg0: string): string
 "isDefaultNamespace"(arg0: string): boolean
 "lookupNamespaceURI"(arg0: string): string
 "isEqualNode"(arg0: $Node$Type): boolean
 "getUserData"(arg0: string): any
 "hasAttributes"(): boolean
 "getLocalName"(): string
 "getChildNodes"(): $NodeList
}

export namespace $Element {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Element$Type = ($Element);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Element_ = $Element$Type;
}}
declare module "packages/org/w3c/dom/$DOMConfiguration" {
import {$DOMStringList, $DOMStringList$Type} from "packages/org/w3c/dom/$DOMStringList"

export interface $DOMConfiguration {

 "setParameter"(arg0: string, arg1: any): void
 "getParameter"(arg0: string): any
 "canSetParameter"(arg0: string, arg1: any): boolean
 "getParameterNames"(): $DOMStringList
}

export namespace $DOMConfiguration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DOMConfiguration$Type = ($DOMConfiguration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DOMConfiguration_ = $DOMConfiguration$Type;
}}
declare module "packages/org/w3c/dom/$DocumentFragment" {
import {$NamedNodeMap, $NamedNodeMap$Type} from "packages/org/w3c/dom/$NamedNodeMap"
import {$Document, $Document$Type} from "packages/org/w3c/dom/$Document"
import {$UserDataHandler, $UserDataHandler$Type} from "packages/org/w3c/dom/$UserDataHandler"
import {$Node, $Node$Type} from "packages/org/w3c/dom/$Node"
import {$NodeList, $NodeList$Type} from "packages/org/w3c/dom/$NodeList"

export interface $DocumentFragment extends $Node {

 "setUserData"(arg0: string, arg1: any, arg2: $UserDataHandler$Type): any
 "getPrefix"(): string
 "normalize"(): void
 "getAttributes"(): $NamedNodeMap
 "isSupported"(arg0: string, arg1: string): boolean
 "getFeature"(arg0: string, arg1: string): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): string
 "removeChild"(arg0: $Node$Type): $Node
 "setNodeValue"(arg0: string): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): string
 "insertBefore"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "getBaseURI"(): string
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): string
 "setPrefix"(arg0: string): void
 "compareDocumentPosition"(arg0: $Node$Type): short
 "getTextContent"(): string
 "setTextContent"(arg0: string): void
 "isSameNode"(arg0: $Node$Type): boolean
 "lookupPrefix"(arg0: string): string
 "isDefaultNamespace"(arg0: string): boolean
 "lookupNamespaceURI"(arg0: string): string
 "isEqualNode"(arg0: $Node$Type): boolean
 "getUserData"(arg0: string): any
 "hasAttributes"(): boolean
 "getLocalName"(): string
 "getChildNodes"(): $NodeList
}

export namespace $DocumentFragment {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DocumentFragment$Type = ($DocumentFragment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DocumentFragment_ = $DocumentFragment$Type;
}}
declare module "packages/org/w3c/dom/$NodeList" {
import {$Node, $Node$Type} from "packages/org/w3c/dom/$Node"

export interface $NodeList {

 "getLength"(): integer
 "item"(arg0: integer): $Node
}

export namespace $NodeList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodeList$Type = ($NodeList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NodeList_ = $NodeList$Type;
}}
declare module "packages/org/w3c/dom/$ProcessingInstruction" {
import {$NamedNodeMap, $NamedNodeMap$Type} from "packages/org/w3c/dom/$NamedNodeMap"
import {$Document, $Document$Type} from "packages/org/w3c/dom/$Document"
import {$UserDataHandler, $UserDataHandler$Type} from "packages/org/w3c/dom/$UserDataHandler"
import {$Node, $Node$Type} from "packages/org/w3c/dom/$Node"
import {$NodeList, $NodeList$Type} from "packages/org/w3c/dom/$NodeList"

export interface $ProcessingInstruction extends $Node {

 "getTarget"(): string
 "getData"(): string
 "setData"(arg0: string): void
 "setUserData"(arg0: string, arg1: any, arg2: $UserDataHandler$Type): any
 "getPrefix"(): string
 "normalize"(): void
 "getAttributes"(): $NamedNodeMap
 "isSupported"(arg0: string, arg1: string): boolean
 "getFeature"(arg0: string, arg1: string): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): string
 "removeChild"(arg0: $Node$Type): $Node
 "setNodeValue"(arg0: string): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): string
 "insertBefore"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "getBaseURI"(): string
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$Type, arg1: $Node$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): string
 "setPrefix"(arg0: string): void
 "compareDocumentPosition"(arg0: $Node$Type): short
 "getTextContent"(): string
 "setTextContent"(arg0: string): void
 "isSameNode"(arg0: $Node$Type): boolean
 "lookupPrefix"(arg0: string): string
 "isDefaultNamespace"(arg0: string): boolean
 "lookupNamespaceURI"(arg0: string): string
 "isEqualNode"(arg0: $Node$Type): boolean
 "getUserData"(arg0: string): any
 "hasAttributes"(): boolean
 "getLocalName"(): string
 "getChildNodes"(): $NodeList
}

export namespace $ProcessingInstruction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProcessingInstruction$Type = ($ProcessingInstruction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProcessingInstruction_ = $ProcessingInstruction$Type;
}}
declare module "packages/org/w3c/dom/$DOMStringList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DOMStringList {

 "getLength"(): integer
 "contains"(arg0: string): boolean
 "item"(arg0: integer): string
}

export namespace $DOMStringList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DOMStringList$Type = ($DOMStringList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DOMStringList_ = $DOMStringList$Type;
}}
