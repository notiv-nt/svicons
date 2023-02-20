/** @typedef {typeof __propDef.props}  CcJcbProps */
/** @typedef {typeof __propDef.events}  CcJcbEvents */
/** @typedef {typeof __propDef.slots}  CcJcbSlots */
export default class CcJcb extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CcJcbProps = typeof __propDef.props
export type CcJcbEvents = typeof __propDef.events
export type CcJcbSlots = typeof __propDef.slots
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
