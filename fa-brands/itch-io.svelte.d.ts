/** @typedef {typeof __propDef.props}  ItchIoProps */
/** @typedef {typeof __propDef.events}  ItchIoEvents */
/** @typedef {typeof __propDef.slots}  ItchIoSlots */
export default class ItchIo extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ItchIoProps = typeof __propDef.props
export type ItchIoEvents = typeof __propDef.events
export type ItchIoSlots = typeof __propDef.slots
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
