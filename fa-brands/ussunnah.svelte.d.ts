/** @typedef {typeof __propDef.props}  UssunnahProps */
/** @typedef {typeof __propDef.events}  UssunnahEvents */
/** @typedef {typeof __propDef.slots}  UssunnahSlots */
export default class Ussunnah extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type UssunnahProps = typeof __propDef.props
export type UssunnahEvents = typeof __propDef.events
export type UssunnahSlots = typeof __propDef.slots
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
