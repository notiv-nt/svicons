/** @typedef {typeof __propDef.props}  HireAHelperProps */
/** @typedef {typeof __propDef.events}  HireAHelperEvents */
/** @typedef {typeof __propDef.slots}  HireAHelperSlots */
export default class HireAHelper extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type HireAHelperProps = typeof __propDef.props
export type HireAHelperEvents = typeof __propDef.events
export type HireAHelperSlots = typeof __propDef.slots
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
