/** @typedef {typeof __propDef.props}  LessProps */
/** @typedef {typeof __propDef.events}  LessEvents */
/** @typedef {typeof __propDef.slots}  LessSlots */
export default class Less extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type LessProps = typeof __propDef.props
export type LessEvents = typeof __propDef.events
export type LessSlots = typeof __propDef.slots
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
