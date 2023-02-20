/** @typedef {typeof __propDef.props}  HackerNewsProps */
/** @typedef {typeof __propDef.events}  HackerNewsEvents */
/** @typedef {typeof __propDef.slots}  HackerNewsSlots */
export default class HackerNews extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type HackerNewsProps = typeof __propDef.props
export type HackerNewsEvents = typeof __propDef.events
export type HackerNewsSlots = typeof __propDef.slots
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
