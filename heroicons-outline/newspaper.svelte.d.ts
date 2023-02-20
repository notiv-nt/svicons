/** @typedef {typeof __propDef.props}  NewspaperProps */
/** @typedef {typeof __propDef.events}  NewspaperEvents */
/** @typedef {typeof __propDef.slots}  NewspaperSlots */
export default class Newspaper extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type NewspaperProps = typeof __propDef.props
export type NewspaperEvents = typeof __propDef.events
export type NewspaperSlots = typeof __propDef.slots
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
