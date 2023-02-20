/** @typedef {typeof __propDef.props}  AlgoliaProps */
/** @typedef {typeof __propDef.events}  AlgoliaEvents */
/** @typedef {typeof __propDef.slots}  AlgoliaSlots */
export default class Algolia extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AlgoliaProps = typeof __propDef.props
export type AlgoliaEvents = typeof __propDef.events
export type AlgoliaSlots = typeof __propDef.slots
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
