/** @typedef {typeof __propDef.props}  DailymotionProps */
/** @typedef {typeof __propDef.events}  DailymotionEvents */
/** @typedef {typeof __propDef.slots}  DailymotionSlots */
export default class Dailymotion extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DailymotionProps = typeof __propDef.props
export type DailymotionEvents = typeof __propDef.events
export type DailymotionSlots = typeof __propDef.slots
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
