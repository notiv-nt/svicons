/** @typedef {typeof __propDef.props}  AudibleProps */
/** @typedef {typeof __propDef.events}  AudibleEvents */
/** @typedef {typeof __propDef.slots}  AudibleSlots */
export default class Audible extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AudibleProps = typeof __propDef.props
export type AudibleEvents = typeof __propDef.events
export type AudibleSlots = typeof __propDef.slots
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
