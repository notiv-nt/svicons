/** @typedef {typeof __propDef.props}  OdnoklassnikiProps */
/** @typedef {typeof __propDef.events}  OdnoklassnikiEvents */
/** @typedef {typeof __propDef.slots}  OdnoklassnikiSlots */
export default class Odnoklassniki extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type OdnoklassnikiProps = typeof __propDef.props
export type OdnoklassnikiEvents = typeof __propDef.events
export type OdnoklassnikiSlots = typeof __propDef.slots
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
