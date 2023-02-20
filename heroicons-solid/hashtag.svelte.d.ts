/** @typedef {typeof __propDef.props}  HashtagProps */
/** @typedef {typeof __propDef.events}  HashtagEvents */
/** @typedef {typeof __propDef.slots}  HashtagSlots */
export default class Hashtag extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type HashtagProps = typeof __propDef.props
export type HashtagEvents = typeof __propDef.events
export type HashtagSlots = typeof __propDef.slots
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
