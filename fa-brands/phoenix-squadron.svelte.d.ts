/** @typedef {typeof __propDef.props}  PhoenixSquadronProps */
/** @typedef {typeof __propDef.events}  PhoenixSquadronEvents */
/** @typedef {typeof __propDef.slots}  PhoenixSquadronSlots */
export default class PhoenixSquadron extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PhoenixSquadronProps = typeof __propDef.props
export type PhoenixSquadronEvents = typeof __propDef.events
export type PhoenixSquadronSlots = typeof __propDef.slots
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
