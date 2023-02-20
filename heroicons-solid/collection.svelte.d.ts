/** @typedef {typeof __propDef.props}  CollectionProps */
/** @typedef {typeof __propDef.events}  CollectionEvents */
/** @typedef {typeof __propDef.slots}  CollectionSlots */
export default class Collection extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CollectionProps = typeof __propDef.props
export type CollectionEvents = typeof __propDef.events
export type CollectionSlots = typeof __propDef.slots
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
