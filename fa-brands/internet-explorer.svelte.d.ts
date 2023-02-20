/** @typedef {typeof __propDef.props}  InternetExplorerProps */
/** @typedef {typeof __propDef.events}  InternetExplorerEvents */
/** @typedef {typeof __propDef.slots}  InternetExplorerSlots */
export default class InternetExplorer extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type InternetExplorerProps = typeof __propDef.props
export type InternetExplorerEvents = typeof __propDef.events
export type InternetExplorerSlots = typeof __propDef.slots
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
