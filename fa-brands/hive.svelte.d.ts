/** @typedef {typeof __propDef.props}  HiveProps */
/** @typedef {typeof __propDef.events}  HiveEvents */
/** @typedef {typeof __propDef.slots}  HiveSlots */
export default class Hive extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type HiveProps = typeof __propDef.props
export type HiveEvents = typeof __propDef.events
export type HiveSlots = typeof __propDef.slots
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
