/** @typedef {typeof __propDef.props}  GratipayProps */
/** @typedef {typeof __propDef.events}  GratipayEvents */
/** @typedef {typeof __propDef.slots}  GratipaySlots */
export default class Gratipay extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GratipayProps = typeof __propDef.props
export type GratipayEvents = typeof __propDef.events
export type GratipaySlots = typeof __propDef.slots
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
