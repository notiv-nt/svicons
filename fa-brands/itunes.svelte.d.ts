/** @typedef {typeof __propDef.props}  ItunesProps */
/** @typedef {typeof __propDef.events}  ItunesEvents */
/** @typedef {typeof __propDef.slots}  ItunesSlots */
export default class Itunes extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ItunesProps = typeof __propDef.props
export type ItunesEvents = typeof __propDef.events
export type ItunesSlots = typeof __propDef.slots
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
