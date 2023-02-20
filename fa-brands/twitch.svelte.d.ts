/** @typedef {typeof __propDef.props}  TwitchProps */
/** @typedef {typeof __propDef.events}  TwitchEvents */
/** @typedef {typeof __propDef.slots}  TwitchSlots */
export default class Twitch extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type TwitchProps = typeof __propDef.props
export type TwitchEvents = typeof __propDef.events
export type TwitchSlots = typeof __propDef.slots
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
