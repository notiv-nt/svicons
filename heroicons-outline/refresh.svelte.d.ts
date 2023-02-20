/** @typedef {typeof __propDef.props}  RefreshProps */
/** @typedef {typeof __propDef.events}  RefreshEvents */
/** @typedef {typeof __propDef.slots}  RefreshSlots */
export default class Refresh extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type RefreshProps = typeof __propDef.props
export type RefreshEvents = typeof __propDef.events
export type RefreshSlots = typeof __propDef.slots
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
