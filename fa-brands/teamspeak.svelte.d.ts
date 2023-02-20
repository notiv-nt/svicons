/** @typedef {typeof __propDef.props}  TeamspeakProps */
/** @typedef {typeof __propDef.events}  TeamspeakEvents */
/** @typedef {typeof __propDef.slots}  TeamspeakSlots */
export default class Teamspeak extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type TeamspeakProps = typeof __propDef.props
export type TeamspeakEvents = typeof __propDef.events
export type TeamspeakSlots = typeof __propDef.slots
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
