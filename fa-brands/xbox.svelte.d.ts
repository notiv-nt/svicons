/** @typedef {typeof __propDef.props}  XboxProps */
/** @typedef {typeof __propDef.events}  XboxEvents */
/** @typedef {typeof __propDef.slots}  XboxSlots */
export default class Xbox extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type XboxProps = typeof __propDef.props
export type XboxEvents = typeof __propDef.events
export type XboxSlots = typeof __propDef.slots
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
