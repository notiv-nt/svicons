/** @typedef {typeof __propDef.props}  LaravelProps */
/** @typedef {typeof __propDef.events}  LaravelEvents */
/** @typedef {typeof __propDef.slots}  LaravelSlots */
export default class Laravel extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type LaravelProps = typeof __propDef.props
export type LaravelEvents = typeof __propDef.events
export type LaravelSlots = typeof __propDef.slots
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
