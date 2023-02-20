/** @typedef {typeof __propDef.props}  ElementorProps */
/** @typedef {typeof __propDef.events}  ElementorEvents */
/** @typedef {typeof __propDef.slots}  ElementorSlots */
export default class Elementor extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ElementorProps = typeof __propDef.props
export type ElementorEvents = typeof __propDef.events
export type ElementorSlots = typeof __propDef.slots
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
