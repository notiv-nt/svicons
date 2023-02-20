/** @typedef {typeof __propDef.props}  CcAmexProps */
/** @typedef {typeof __propDef.events}  CcAmexEvents */
/** @typedef {typeof __propDef.slots}  CcAmexSlots */
export default class CcAmex extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CcAmexProps = typeof __propDef.props
export type CcAmexEvents = typeof __propDef.events
export type CcAmexSlots = typeof __propDef.slots
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
