/** @typedef {typeof __propDef.props}  DocumentTextProps */
/** @typedef {typeof __propDef.events}  DocumentTextEvents */
/** @typedef {typeof __propDef.slots}  DocumentTextSlots */
export default class DocumentText extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DocumentTextProps = typeof __propDef.props
export type DocumentTextEvents = typeof __propDef.events
export type DocumentTextSlots = typeof __propDef.slots
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
