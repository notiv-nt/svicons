/** @typedef {typeof __propDef.props}  UntappdProps */
/** @typedef {typeof __propDef.events}  UntappdEvents */
/** @typedef {typeof __propDef.slots}  UntappdSlots */
export default class Untappd extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type UntappdProps = typeof __propDef.props
export type UntappdEvents = typeof __propDef.events
export type UntappdSlots = typeof __propDef.slots
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
