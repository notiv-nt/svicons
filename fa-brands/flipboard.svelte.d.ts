/** @typedef {typeof __propDef.props}  FlipboardProps */
/** @typedef {typeof __propDef.events}  FlipboardEvents */
/** @typedef {typeof __propDef.slots}  FlipboardSlots */
export default class Flipboard extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FlipboardProps = typeof __propDef.props
export type FlipboardEvents = typeof __propDef.events
export type FlipboardSlots = typeof __propDef.slots
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
