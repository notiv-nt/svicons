/** @typedef {typeof __propDef.props}  DocumentProps */
/** @typedef {typeof __propDef.events}  DocumentEvents */
/** @typedef {typeof __propDef.slots}  DocumentSlots */
export default class Document extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DocumentProps = typeof __propDef.props
export type DocumentEvents = typeof __propDef.events
export type DocumentSlots = typeof __propDef.slots
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
