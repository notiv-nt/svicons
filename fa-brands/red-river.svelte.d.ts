/** @typedef {typeof __propDef.props}  RedRiverProps */
/** @typedef {typeof __propDef.events}  RedRiverEvents */
/** @typedef {typeof __propDef.slots}  RedRiverSlots */
export default class RedRiver extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type RedRiverProps = typeof __propDef.props
export type RedRiverEvents = typeof __propDef.events
export type RedRiverSlots = typeof __propDef.slots
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
