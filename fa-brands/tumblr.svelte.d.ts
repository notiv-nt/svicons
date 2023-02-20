/** @typedef {typeof __propDef.props}  TumblrProps */
/** @typedef {typeof __propDef.events}  TumblrEvents */
/** @typedef {typeof __propDef.slots}  TumblrSlots */
export default class Tumblr extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type TumblrProps = typeof __propDef.props
export type TumblrEvents = typeof __propDef.events
export type TumblrSlots = typeof __propDef.slots
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
