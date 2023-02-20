/** @typedef {typeof __propDef.props}  BotsProps */
/** @typedef {typeof __propDef.events}  BotsEvents */
/** @typedef {typeof __propDef.slots}  BotsSlots */
export default class Bots extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type BotsProps = typeof __propDef.props
export type BotsEvents = typeof __propDef.events
export type BotsSlots = typeof __propDef.slots
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
