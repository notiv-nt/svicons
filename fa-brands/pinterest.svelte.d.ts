/** @typedef {typeof __propDef.props}  PinterestProps */
/** @typedef {typeof __propDef.events}  PinterestEvents */
/** @typedef {typeof __propDef.slots}  PinterestSlots */
export default class Pinterest extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PinterestProps = typeof __propDef.props
export type PinterestEvents = typeof __propDef.events
export type PinterestSlots = typeof __propDef.slots
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
