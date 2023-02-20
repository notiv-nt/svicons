/** @typedef {typeof __propDef.props}  IntercomProps */
/** @typedef {typeof __propDef.events}  IntercomEvents */
/** @typedef {typeof __propDef.slots}  IntercomSlots */
export default class Intercom extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type IntercomProps = typeof __propDef.props
export type IntercomEvents = typeof __propDef.events
export type IntercomSlots = typeof __propDef.slots
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
