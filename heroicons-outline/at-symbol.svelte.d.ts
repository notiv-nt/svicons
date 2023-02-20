/** @typedef {typeof __propDef.props}  AtSymbolProps */
/** @typedef {typeof __propDef.events}  AtSymbolEvents */
/** @typedef {typeof __propDef.slots}  AtSymbolSlots */
export default class AtSymbol extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AtSymbolProps = typeof __propDef.props
export type AtSymbolEvents = typeof __propDef.events
export type AtSymbolSlots = typeof __propDef.slots
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
