/** @typedef {typeof __propDef.props}  WordpressProps */
/** @typedef {typeof __propDef.events}  WordpressEvents */
/** @typedef {typeof __propDef.slots}  WordpressSlots */
export default class Wordpress extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type WordpressProps = typeof __propDef.props
export type WordpressEvents = typeof __propDef.events
export type WordpressSlots = typeof __propDef.slots
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
