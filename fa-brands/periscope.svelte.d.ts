/** @typedef {typeof __propDef.props}  PeriscopeProps */
/** @typedef {typeof __propDef.events}  PeriscopeEvents */
/** @typedef {typeof __propDef.slots}  PeriscopeSlots */
export default class Periscope extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PeriscopeProps = typeof __propDef.props
export type PeriscopeEvents = typeof __propDef.events
export type PeriscopeSlots = typeof __propDef.slots
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
