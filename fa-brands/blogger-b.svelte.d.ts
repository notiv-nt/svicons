/** @typedef {typeof __propDef.props}  BloggerBProps */
/** @typedef {typeof __propDef.events}  BloggerBEvents */
/** @typedef {typeof __propDef.slots}  BloggerBSlots */
export default class BloggerB extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type BloggerBProps = typeof __propDef.props
export type BloggerBEvents = typeof __propDef.events
export type BloggerBSlots = typeof __propDef.slots
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
