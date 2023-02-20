/** @typedef {typeof __propDef.props}  ReactProps */
/** @typedef {typeof __propDef.events}  ReactEvents */
/** @typedef {typeof __propDef.slots}  ReactSlots */
export default class React extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ReactProps = typeof __propDef.props
export type ReactEvents = typeof __propDef.events
export type ReactSlots = typeof __propDef.slots
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
