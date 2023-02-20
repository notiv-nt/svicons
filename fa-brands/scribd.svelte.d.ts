/** @typedef {typeof __propDef.props}  ScribdProps */
/** @typedef {typeof __propDef.events}  ScribdEvents */
/** @typedef {typeof __propDef.slots}  ScribdSlots */
export default class Scribd extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ScribdProps = typeof __propDef.props
export type ScribdEvents = typeof __propDef.events
export type ScribdSlots = typeof __propDef.slots
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
