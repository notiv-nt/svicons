/** @typedef {typeof __propDef.props}  DatabaseProps */
/** @typedef {typeof __propDef.events}  DatabaseEvents */
/** @typedef {typeof __propDef.slots}  DatabaseSlots */
export default class Database extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DatabaseProps = typeof __propDef.props
export type DatabaseEvents = typeof __propDef.events
export type DatabaseSlots = typeof __propDef.slots
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
