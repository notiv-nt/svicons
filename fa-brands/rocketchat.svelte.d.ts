/** @typedef {typeof __propDef.props}  RocketchatProps */
/** @typedef {typeof __propDef.events}  RocketchatEvents */
/** @typedef {typeof __propDef.slots}  RocketchatSlots */
export default class Rocketchat extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type RocketchatProps = typeof __propDef.props
export type RocketchatEvents = typeof __propDef.events
export type RocketchatSlots = typeof __propDef.slots
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
