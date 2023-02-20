/** @typedef {typeof __propDef.props}  LinuxProps */
/** @typedef {typeof __propDef.events}  LinuxEvents */
/** @typedef {typeof __propDef.slots}  LinuxSlots */
export default class Linux extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type LinuxProps = typeof __propDef.props
export type LinuxEvents = typeof __propDef.events
export type LinuxSlots = typeof __propDef.slots
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
