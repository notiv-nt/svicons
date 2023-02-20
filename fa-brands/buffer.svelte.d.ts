/** @typedef {typeof __propDef.props}  BufferProps */
/** @typedef {typeof __propDef.events}  BufferEvents */
/** @typedef {typeof __propDef.slots}  BufferSlots */
export default class Buffer extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type BufferProps = typeof __propDef.props
export type BufferEvents = typeof __propDef.events
export type BufferSlots = typeof __propDef.slots
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
