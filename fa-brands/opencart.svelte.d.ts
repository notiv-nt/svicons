/** @typedef {typeof __propDef.props}  OpencartProps */
/** @typedef {typeof __propDef.events}  OpencartEvents */
/** @typedef {typeof __propDef.slots}  OpencartSlots */
export default class Opencart extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type OpencartProps = typeof __propDef.props
export type OpencartEvents = typeof __propDef.events
export type OpencartSlots = typeof __propDef.slots
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
