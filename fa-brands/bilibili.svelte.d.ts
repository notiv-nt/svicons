/** @typedef {typeof __propDef.props}  BilibiliProps */
/** @typedef {typeof __propDef.events}  BilibiliEvents */
/** @typedef {typeof __propDef.slots}  BilibiliSlots */
export default class Bilibili extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type BilibiliProps = typeof __propDef.props
export type BilibiliEvents = typeof __propDef.events
export type BilibiliSlots = typeof __propDef.slots
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
