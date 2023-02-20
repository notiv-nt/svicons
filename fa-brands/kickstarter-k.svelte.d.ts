/** @typedef {typeof __propDef.props}  KickstarterKProps */
/** @typedef {typeof __propDef.events}  KickstarterKEvents */
/** @typedef {typeof __propDef.slots}  KickstarterKSlots */
export default class KickstarterK extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type KickstarterKProps = typeof __propDef.props
export type KickstarterKEvents = typeof __propDef.events
export type KickstarterKSlots = typeof __propDef.slots
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
