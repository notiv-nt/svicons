/** @typedef {typeof __propDef.props}  PinterestPProps */
/** @typedef {typeof __propDef.events}  PinterestPEvents */
/** @typedef {typeof __propDef.slots}  PinterestPSlots */
export default class PinterestP extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PinterestPProps = typeof __propDef.props
export type PinterestPEvents = typeof __propDef.events
export type PinterestPSlots = typeof __propDef.slots
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
