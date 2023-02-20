/** @typedef {typeof __propDef.props}  RssProps */
/** @typedef {typeof __propDef.events}  RssEvents */
/** @typedef {typeof __propDef.slots}  RssSlots */
export default class Rss extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type RssProps = typeof __propDef.props
export type RssEvents = typeof __propDef.events
export type RssSlots = typeof __propDef.slots
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
