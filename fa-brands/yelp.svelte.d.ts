/** @typedef {typeof __propDef.props}  YelpProps */
/** @typedef {typeof __propDef.events}  YelpEvents */
/** @typedef {typeof __propDef.slots}  YelpSlots */
export default class Yelp extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type YelpProps = typeof __propDef.props
export type YelpEvents = typeof __propDef.events
export type YelpSlots = typeof __propDef.slots
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
