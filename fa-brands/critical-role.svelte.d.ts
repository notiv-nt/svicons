/** @typedef {typeof __propDef.props}  CriticalRoleProps */
/** @typedef {typeof __propDef.events}  CriticalRoleEvents */
/** @typedef {typeof __propDef.slots}  CriticalRoleSlots */
export default class CriticalRole extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CriticalRoleProps = typeof __propDef.props
export type CriticalRoleEvents = typeof __propDef.events
export type CriticalRoleSlots = typeof __propDef.slots
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
