/** @typedef {typeof __propDef.props}  OsiProps */
/** @typedef {typeof __propDef.events}  OsiEvents */
/** @typedef {typeof __propDef.slots}  OsiSlots */
export default class Osi extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type OsiProps = typeof __propDef.props
export type OsiEvents = typeof __propDef.events
export type OsiSlots = typeof __propDef.slots
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
