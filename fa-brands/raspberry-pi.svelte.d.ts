/** @typedef {typeof __propDef.props}  RaspberryPiProps */
/** @typedef {typeof __propDef.events}  RaspberryPiEvents */
/** @typedef {typeof __propDef.slots}  RaspberryPiSlots */
export default class RaspberryPi extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type RaspberryPiProps = typeof __propDef.props
export type RaspberryPiEvents = typeof __propDef.events
export type RaspberryPiSlots = typeof __propDef.slots
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
