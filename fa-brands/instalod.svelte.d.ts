/** @typedef {typeof __propDef.props}  InstalodProps */
/** @typedef {typeof __propDef.events}  InstalodEvents */
/** @typedef {typeof __propDef.slots}  InstalodSlots */
export default class Instalod extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type InstalodProps = typeof __propDef.props
export type InstalodEvents = typeof __propDef.events
export type InstalodSlots = typeof __propDef.slots
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
