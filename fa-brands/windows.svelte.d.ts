/** @typedef {typeof __propDef.props}  WindowsProps */
/** @typedef {typeof __propDef.events}  WindowsEvents */
/** @typedef {typeof __propDef.slots}  WindowsSlots */
export default class Windows extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type WindowsProps = typeof __propDef.props
export type WindowsEvents = typeof __propDef.events
export type WindowsSlots = typeof __propDef.slots
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
