/** @typedef {typeof __propDef.props}  WordpressSimpleProps */
/** @typedef {typeof __propDef.events}  WordpressSimpleEvents */
/** @typedef {typeof __propDef.slots}  WordpressSimpleSlots */
export default class WordpressSimple extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type WordpressSimpleProps = typeof __propDef.props
export type WordpressSimpleEvents = typeof __propDef.events
export type WordpressSimpleSlots = typeof __propDef.slots
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
