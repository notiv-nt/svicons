/** @typedef {typeof __propDef.props}  HornbillProps */
/** @typedef {typeof __propDef.events}  HornbillEvents */
/** @typedef {typeof __propDef.slots}  HornbillSlots */
export default class Hornbill extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type HornbillProps = typeof __propDef.props
export type HornbillEvents = typeof __propDef.events
export type HornbillSlots = typeof __propDef.slots
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
