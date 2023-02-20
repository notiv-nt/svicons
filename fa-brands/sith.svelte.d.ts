/** @typedef {typeof __propDef.props}  SithProps */
/** @typedef {typeof __propDef.events}  SithEvents */
/** @typedef {typeof __propDef.slots}  SithSlots */
export default class Sith extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SithProps = typeof __propDef.props
export type SithEvents = typeof __propDef.events
export type SithSlots = typeof __propDef.slots
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
