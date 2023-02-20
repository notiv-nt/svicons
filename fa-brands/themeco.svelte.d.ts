/** @typedef {typeof __propDef.props}  ThemecoProps */
/** @typedef {typeof __propDef.events}  ThemecoEvents */
/** @typedef {typeof __propDef.slots}  ThemecoSlots */
export default class Themeco extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ThemecoProps = typeof __propDef.props
export type ThemecoEvents = typeof __propDef.events
export type ThemecoSlots = typeof __propDef.slots
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
