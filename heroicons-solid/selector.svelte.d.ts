/** @typedef {typeof __propDef.props}  SelectorProps */
/** @typedef {typeof __propDef.events}  SelectorEvents */
/** @typedef {typeof __propDef.slots}  SelectorSlots */
export default class Selector extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SelectorProps = typeof __propDef.props
export type SelectorEvents = typeof __propDef.events
export type SelectorSlots = typeof __propDef.slots
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
