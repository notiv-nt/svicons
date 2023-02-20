/** @typedef {typeof __propDef.props}  EmpireProps */
/** @typedef {typeof __propDef.events}  EmpireEvents */
/** @typedef {typeof __propDef.slots}  EmpireSlots */
export default class Empire extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type EmpireProps = typeof __propDef.props
export type EmpireEvents = typeof __propDef.events
export type EmpireSlots = typeof __propDef.slots
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
