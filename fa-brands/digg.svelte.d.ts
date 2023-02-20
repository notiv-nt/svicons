/** @typedef {typeof __propDef.props}  DiggProps */
/** @typedef {typeof __propDef.events}  DiggEvents */
/** @typedef {typeof __propDef.slots}  DiggSlots */
export default class Digg extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DiggProps = typeof __propDef.props
export type DiggEvents = typeof __propDef.events
export type DiggSlots = typeof __propDef.slots
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
