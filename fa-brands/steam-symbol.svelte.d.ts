/** @typedef {typeof __propDef.props}  SteamSymbolProps */
/** @typedef {typeof __propDef.events}  SteamSymbolEvents */
/** @typedef {typeof __propDef.slots}  SteamSymbolSlots */
export default class SteamSymbol extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SteamSymbolProps = typeof __propDef.props
export type SteamSymbolEvents = typeof __propDef.events
export type SteamSymbolSlots = typeof __propDef.slots
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
