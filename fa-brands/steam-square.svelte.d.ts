/** @typedef {typeof __propDef.props}  SteamSquareProps */
/** @typedef {typeof __propDef.events}  SteamSquareEvents */
/** @typedef {typeof __propDef.slots}  SteamSquareSlots */
export default class SteamSquare extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SteamSquareProps = typeof __propDef.props
export type SteamSquareEvents = typeof __propDef.events
export type SteamSquareSlots = typeof __propDef.slots
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
