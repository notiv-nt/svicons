/** @typedef {typeof __propDef.props}  AndroidProps */
/** @typedef {typeof __propDef.events}  AndroidEvents */
/** @typedef {typeof __propDef.slots}  AndroidSlots */
export default class Android extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AndroidProps = typeof __propDef.props
export type AndroidEvents = typeof __propDef.events
export type AndroidSlots = typeof __propDef.slots
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
