/** @typedef {typeof __propDef.props}  WeiboProps */
/** @typedef {typeof __propDef.events}  WeiboEvents */
/** @typedef {typeof __propDef.slots}  WeiboSlots */
export default class Weibo extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type WeiboProps = typeof __propDef.props
export type WeiboEvents = typeof __propDef.events
export type WeiboSlots = typeof __propDef.slots
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
