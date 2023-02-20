/** @typedef {typeof __propDef.props}  ZhihuProps */
/** @typedef {typeof __propDef.events}  ZhihuEvents */
/** @typedef {typeof __propDef.slots}  ZhihuSlots */
export default class Zhihu extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ZhihuProps = typeof __propDef.props
export type ZhihuEvents = typeof __propDef.events
export type ZhihuSlots = typeof __propDef.slots
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
