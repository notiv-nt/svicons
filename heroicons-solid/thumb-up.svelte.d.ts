/** @typedef {typeof __propDef.props}  ThumbUpProps */
/** @typedef {typeof __propDef.events}  ThumbUpEvents */
/** @typedef {typeof __propDef.slots}  ThumbUpSlots */
export default class ThumbUp extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ThumbUpProps = typeof __propDef.props
export type ThumbUpEvents = typeof __propDef.events
export type ThumbUpSlots = typeof __propDef.slots
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
