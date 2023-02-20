/** @typedef {typeof __propDef.props}  WpexplorerProps */
/** @typedef {typeof __propDef.events}  WpexplorerEvents */
/** @typedef {typeof __propDef.slots}  WpexplorerSlots */
export default class Wpexplorer extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type WpexplorerProps = typeof __propDef.props
export type WpexplorerEvents = typeof __propDef.events
export type WpexplorerSlots = typeof __propDef.slots
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
