/** @typedef {typeof __propDef.props}  NapsterProps */
/** @typedef {typeof __propDef.events}  NapsterEvents */
/** @typedef {typeof __propDef.slots}  NapsterSlots */
export default class Napster extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type NapsterProps = typeof __propDef.props
export type NapsterEvents = typeof __propDef.events
export type NapsterSlots = typeof __propDef.slots
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
