/** @typedef {typeof __propDef.props}  XingProps */
/** @typedef {typeof __propDef.events}  XingEvents */
/** @typedef {typeof __propDef.slots}  XingSlots */
export default class Xing extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type XingProps = typeof __propDef.props
export type XingEvents = typeof __propDef.events
export type XingSlots = typeof __propDef.slots
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
