/** @typedef {typeof __propDef.props}  WeixinProps */
/** @typedef {typeof __propDef.events}  WeixinEvents */
/** @typedef {typeof __propDef.slots}  WeixinSlots */
export default class Weixin extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type WeixinProps = typeof __propDef.props
export type WeixinEvents = typeof __propDef.events
export type WeixinSlots = typeof __propDef.slots
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
