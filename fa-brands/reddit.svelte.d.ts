/** @typedef {typeof __propDef.props}  RedditProps */
/** @typedef {typeof __propDef.events}  RedditEvents */
/** @typedef {typeof __propDef.slots}  RedditSlots */
export default class Reddit extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type RedditProps = typeof __propDef.props
export type RedditEvents = typeof __propDef.events
export type RedditSlots = typeof __propDef.slots
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
