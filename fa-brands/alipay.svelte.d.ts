/** @typedef {typeof __propDef.props}  AlipayProps */
/** @typedef {typeof __propDef.events}  AlipayEvents */
/** @typedef {typeof __propDef.slots}  AlipaySlots */
export default class Alipay extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AlipayProps = typeof __propDef.props
export type AlipayEvents = typeof __propDef.events
export type AlipaySlots = typeof __propDef.slots
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
