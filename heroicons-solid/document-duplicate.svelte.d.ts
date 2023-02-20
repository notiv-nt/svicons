/** @typedef {typeof __propDef.props}  DocumentDuplicateProps */
/** @typedef {typeof __propDef.events}  DocumentDuplicateEvents */
/** @typedef {typeof __propDef.slots}  DocumentDuplicateSlots */
export default class DocumentDuplicate extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DocumentDuplicateProps = typeof __propDef.props
export type DocumentDuplicateEvents = typeof __propDef.events
export type DocumentDuplicateSlots = typeof __propDef.slots
import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
  props: {
    [x: string]: any
  }
  events: {
    [evt: string]: CustomEvent<any>
  }
  slots: {}
}
export {}
