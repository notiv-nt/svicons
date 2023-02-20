/** @typedef {typeof __propDef.props}  NimblrProps */
/** @typedef {typeof __propDef.events}  NimblrEvents */
/** @typedef {typeof __propDef.slots}  NimblrSlots */
export default class Nimblr extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type NimblrProps = typeof __propDef.props
export type NimblrEvents = typeof __propDef.events
export type NimblrSlots = typeof __propDef.slots
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
