/** @typedef {typeof __propDef.props}  SteamProps */
/** @typedef {typeof __propDef.events}  SteamEvents */
/** @typedef {typeof __propDef.slots}  SteamSlots */
export default class Steam extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SteamProps = typeof __propDef.props
export type SteamEvents = typeof __propDef.events
export type SteamSlots = typeof __propDef.slots
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
