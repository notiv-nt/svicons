/** @typedef {typeof __propDef.props}  KickstarterProps */
/** @typedef {typeof __propDef.events}  KickstarterEvents */
/** @typedef {typeof __propDef.slots}  KickstarterSlots */
export default class Kickstarter extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type KickstarterProps = typeof __propDef.props
export type KickstarterEvents = typeof __propDef.events
export type KickstarterSlots = typeof __propDef.slots
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
