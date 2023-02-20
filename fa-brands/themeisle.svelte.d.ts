/** @typedef {typeof __propDef.props}  ThemeisleProps */
/** @typedef {typeof __propDef.events}  ThemeisleEvents */
/** @typedef {typeof __propDef.slots}  ThemeisleSlots */
export default class Themeisle extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ThemeisleProps = typeof __propDef.props
export type ThemeisleEvents = typeof __propDef.events
export type ThemeisleSlots = typeof __propDef.slots
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
