/** @typedef {typeof __propDef.props}  HooliProps */
/** @typedef {typeof __propDef.events}  HooliEvents */
/** @typedef {typeof __propDef.slots}  HooliSlots */
export default class Hooli extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type HooliProps = typeof __propDef.props
export type HooliEvents = typeof __propDef.events
export type HooliSlots = typeof __propDef.slots
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
