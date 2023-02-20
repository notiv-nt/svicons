/** @typedef {typeof __propDef.props}  IoxhostProps */
/** @typedef {typeof __propDef.events}  IoxhostEvents */
/** @typedef {typeof __propDef.slots}  IoxhostSlots */
export default class Ioxhost extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type IoxhostProps = typeof __propDef.props
export type IoxhostEvents = typeof __propDef.events
export type IoxhostSlots = typeof __propDef.slots
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
