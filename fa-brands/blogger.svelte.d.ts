/** @typedef {typeof __propDef.props}  BloggerProps */
/** @typedef {typeof __propDef.events}  BloggerEvents */
/** @typedef {typeof __propDef.slots}  BloggerSlots */
export default class Blogger extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type BloggerProps = typeof __propDef.props
export type BloggerEvents = typeof __propDef.events
export type BloggerSlots = typeof __propDef.slots
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
