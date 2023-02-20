/** @typedef {typeof __propDef.props}  BackspaceProps */
/** @typedef {typeof __propDef.events}  BackspaceEvents */
/** @typedef {typeof __propDef.slots}  BackspaceSlots */
export default class Backspace extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type BackspaceProps = typeof __propDef.props
export type BackspaceEvents = typeof __propDef.events
export type BackspaceSlots = typeof __propDef.slots
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
