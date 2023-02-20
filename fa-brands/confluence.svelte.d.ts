/** @typedef {typeof __propDef.props}  ConfluenceProps */
/** @typedef {typeof __propDef.events}  ConfluenceEvents */
/** @typedef {typeof __propDef.slots}  ConfluenceSlots */
export default class Confluence extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ConfluenceProps = typeof __propDef.props
export type ConfluenceEvents = typeof __propDef.events
export type ConfluenceSlots = typeof __propDef.slots
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
