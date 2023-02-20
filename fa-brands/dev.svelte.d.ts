/** @typedef {typeof __propDef.props}  DevProps */
/** @typedef {typeof __propDef.events}  DevEvents */
/** @typedef {typeof __propDef.slots}  DevSlots */
export default class Dev extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DevProps = typeof __propDef.props
export type DevEvents = typeof __propDef.events
export type DevSlots = typeof __propDef.slots
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
