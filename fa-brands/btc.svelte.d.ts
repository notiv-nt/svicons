/** @typedef {typeof __propDef.props}  BtcProps */
/** @typedef {typeof __propDef.events}  BtcEvents */
/** @typedef {typeof __propDef.slots}  BtcSlots */
export default class Btc extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type BtcProps = typeof __propDef.props
export type BtcEvents = typeof __propDef.events
export type BtcSlots = typeof __propDef.slots
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
