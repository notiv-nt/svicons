/** @typedef {typeof __propDef.props}  SafariProps */
/** @typedef {typeof __propDef.events}  SafariEvents */
/** @typedef {typeof __propDef.slots}  SafariSlots */
export default class Safari extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SafariProps = typeof __propDef.props
export type SafariEvents = typeof __propDef.events
export type SafariSlots = typeof __propDef.slots
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
