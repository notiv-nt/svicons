/** @typedef {typeof __propDef.props}  StaylinkedProps */
/** @typedef {typeof __propDef.events}  StaylinkedEvents */
/** @typedef {typeof __propDef.slots}  StaylinkedSlots */
export default class Staylinked extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type StaylinkedProps = typeof __propDef.props
export type StaylinkedEvents = typeof __propDef.events
export type StaylinkedSlots = typeof __propDef.slots
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
