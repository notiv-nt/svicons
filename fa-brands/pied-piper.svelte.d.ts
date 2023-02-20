/** @typedef {typeof __propDef.props}  PiedPiperProps */
/** @typedef {typeof __propDef.events}  PiedPiperEvents */
/** @typedef {typeof __propDef.slots}  PiedPiperSlots */
export default class PiedPiper extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PiedPiperProps = typeof __propDef.props
export type PiedPiperEvents = typeof __propDef.events
export type PiedPiperSlots = typeof __propDef.slots
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
