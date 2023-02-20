/** @typedef {typeof __propDef.props}  ImdbProps */
/** @typedef {typeof __propDef.events}  ImdbEvents */
/** @typedef {typeof __propDef.slots}  ImdbSlots */
export default class Imdb extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ImdbProps = typeof __propDef.props
export type ImdbEvents = typeof __propDef.events
export type ImdbSlots = typeof __propDef.slots
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
