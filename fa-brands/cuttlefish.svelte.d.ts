/** @typedef {typeof __propDef.props}  CuttlefishProps */
/** @typedef {typeof __propDef.events}  CuttlefishEvents */
/** @typedef {typeof __propDef.slots}  CuttlefishSlots */
export default class Cuttlefish extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CuttlefishProps = typeof __propDef.props
export type CuttlefishEvents = typeof __propDef.events
export type CuttlefishSlots = typeof __propDef.slots
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
