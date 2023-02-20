/** @typedef {typeof __propDef.props}  FreebsdProps */
/** @typedef {typeof __propDef.events}  FreebsdEvents */
/** @typedef {typeof __propDef.slots}  FreebsdSlots */
export default class Freebsd extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FreebsdProps = typeof __propDef.props
export type FreebsdEvents = typeof __propDef.events
export type FreebsdSlots = typeof __propDef.slots
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
