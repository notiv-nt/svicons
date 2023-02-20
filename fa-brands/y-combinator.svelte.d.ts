/** @typedef {typeof __propDef.props}  YCombinatorProps */
/** @typedef {typeof __propDef.events}  YCombinatorEvents */
/** @typedef {typeof __propDef.slots}  YCombinatorSlots */
export default class YCombinator extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type YCombinatorProps = typeof __propDef.props
export type YCombinatorEvents = typeof __propDef.events
export type YCombinatorSlots = typeof __propDef.slots
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
