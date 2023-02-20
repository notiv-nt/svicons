/** @typedef {typeof __propDef.props}  ChromeProps */
/** @typedef {typeof __propDef.events}  ChromeEvents */
/** @typedef {typeof __propDef.slots}  ChromeSlots */
export default class Chrome extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ChromeProps = typeof __propDef.props
export type ChromeEvents = typeof __propDef.events
export type ChromeSlots = typeof __propDef.slots
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
