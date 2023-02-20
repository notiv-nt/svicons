/** @typedef {typeof __propDef.props}  SpotifyProps */
/** @typedef {typeof __propDef.events}  SpotifyEvents */
/** @typedef {typeof __propDef.slots}  SpotifySlots */
export default class Spotify extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SpotifyProps = typeof __propDef.props
export type SpotifyEvents = typeof __propDef.events
export type SpotifySlots = typeof __propDef.slots
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
