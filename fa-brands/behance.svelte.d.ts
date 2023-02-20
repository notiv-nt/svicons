/** @typedef {typeof __propDef.props}  BehanceProps */
/** @typedef {typeof __propDef.events}  BehanceEvents */
/** @typedef {typeof __propDef.slots}  BehanceSlots */
export default class Behance extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type BehanceProps = typeof __propDef.props
export type BehanceEvents = typeof __propDef.events
export type BehanceSlots = typeof __propDef.slots
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
