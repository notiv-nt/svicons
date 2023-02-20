/** @typedef {typeof __propDef.props}  PatreonProps */
/** @typedef {typeof __propDef.events}  PatreonEvents */
/** @typedef {typeof __propDef.slots}  PatreonSlots */
export default class Patreon extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PatreonProps = typeof __propDef.props
export type PatreonEvents = typeof __propDef.events
export type PatreonSlots = typeof __propDef.slots
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
