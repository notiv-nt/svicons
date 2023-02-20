/** @typedef {typeof __propDef.props}  ReacteuropeProps */
/** @typedef {typeof __propDef.events}  ReacteuropeEvents */
/** @typedef {typeof __propDef.slots}  ReacteuropeSlots */
export default class Reacteurope extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ReacteuropeProps = typeof __propDef.props
export type ReacteuropeEvents = typeof __propDef.events
export type ReacteuropeSlots = typeof __propDef.slots
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
