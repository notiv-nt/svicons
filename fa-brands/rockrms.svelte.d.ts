/** @typedef {typeof __propDef.props}  RockrmsProps */
/** @typedef {typeof __propDef.events}  RockrmsEvents */
/** @typedef {typeof __propDef.slots}  RockrmsSlots */
export default class Rockrms extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type RockrmsProps = typeof __propDef.props
export type RockrmsEvents = typeof __propDef.events
export type RockrmsSlots = typeof __propDef.slots
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
